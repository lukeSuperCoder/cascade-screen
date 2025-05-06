import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon, Stroke, Fill, Circle } from 'ol/style';
import { fromLonLat,toLonLat } from 'ol/proj';

class MarkerLayer {
  constructor(mapInstance, options) {
    this.map = mapInstance;
    this.options = {
      // 默认配置
      defaultStyle: new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({
            color: '#FF0000'
          }),
          stroke: new Stroke({
            color: '#FFFFFF',
            width: 2
          })
        })
      }),
      // 自定义图标配置
      iconStyle: null,
      // 是否显示标签
      showLabel: false,
      // 标签样式
      labelStyle: {
        text: '',
        font: '14px Microsoft YaHei',
        fill: new Fill({
          color: '#000000'
        }),
        stroke: new Stroke({
          color: '#FFFFFF',
          width: 2
        }),
        offsetY: -20
      },
      // 点击回调函数
      onClick: null
    };
    this.options = Object.assign(this.options, options);

    // 创建矢量图层
    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      zIndex: 10
    });

    // 将图层添加到地图
    this.map.addLayer(this.vectorLayer);

    // 绑定点击事件
    this.map.on('click', this._handleClick.bind(this));
  }

  /**
   * 处理点击事件
   * @private
   */
  _handleClick(event) {
    const feature = this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
      return feature;
    });

    if (feature) {
      const featureData = {
        type: 'marker',
        properties: feature.getProperties(),
        geometry: toLonLat(feature.getGeometry().getCoordinates())
      };
      
      // 调用回调函数
      if (typeof this.options.onClick === 'function') {
        this.options.onClick(featureData, event);
      }
    }
  }

  /**
   * 设置点击回调函数
   * @param {Function} callback 回调函数
   */
  setOnClick(callback) {
    this.options.onClick = callback;
  }

  /**
   * 销毁图层
   */
  destroy() {
    // 移除点击事件
    this.map.un('click', this._handleClick.bind(this));
    // 移除图层
    this.map.removeLayer(this.vectorLayer);
    // 清除数据源
    this.vectorSource.clear();
  }

  /**
   * 添加单个点位
   * @param {Object} point 点位信息
   * @param {Array} point.coordinates 坐标 [经度, 纬度]
   * @param {Object} point.properties 点位属性
   * @param {Object} point.style 自定义样式
   */
  addMarker(point) {
    const feature = this._createFeature(point);
    this.vectorSource.addFeature(feature);
    return feature;
  }

  /**
   * 添加多个点位
   * @param {Array} points 点位数组
   */
  addMarkers(points) {
    const features = points.map(point => this._createFeature(point));
    this.vectorSource.addFeatures(features);
    return features;
  }

  /**
   * 创建要素
   * @private
   */
  _createFeature(point) {
    const { coordinates, properties = {}, style } = point;
    const feature = new Feature({
      geometry: new Point(fromLonLat(coordinates)),
      ...properties
    });

    // 设置样式
    if (style) {
      feature.setStyle(this._createStyle(style));
    } else if (this.options.iconStyle) {
      feature.setStyle(this._createIconStyle(this.options.iconStyle));
    } else {
      feature.setStyle(this.options.defaultStyle);
    }

    return feature;
  }

  /**
   * 创建自定义图标样式
   * @private
   */
  _createIconStyle(iconConfig) {
    return new Style({
      image: new Icon({
        src: iconConfig.src,
        scale: iconConfig.scale || 1,
        anchor: iconConfig.anchor || [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction'
      })
    });
  }

  /**
   * 创建自定义样式
   * @private
   */
  _createStyle(styleConfig) {
    // 创建圆形样式配置
    const circleConfig = {
      radius: styleConfig.radius || 6,
      fill: new Fill({
        color: styleConfig.fillColor || '#FF0000'
      })
    };

    // 如果配置了stroke相关属性,则添加stroke
    if (styleConfig.showStroke !== false) {
      circleConfig.stroke = new Stroke({
        color: styleConfig.strokeColor || '#FFFFFF',
        width: styleConfig.strokeWidth || 2
      });
    }

    return new Style({
      image: new Circle(circleConfig)
    });
  }

  /**
   * 清除所有点位
   */
  clearMarkers() {
    this.vectorSource.clear();
  }

  /**
   * 移除指定点位
   * @param {Feature} feature 要移除的点位要素
   */
  removeMarker(feature) {
    this.vectorSource.removeFeature(feature);
  }
  /**
   * 设置最小缩放级别
   * @param {number} minZoom 最小缩放级别
   */
    setMinZoom(minZoom) {
      this.vectorLayer.setMinZoom(minZoom);
    }
  /**
   * 设置最大缩放级别
   * @param {number} maxZoom 最大缩放级别
   */
  setMaxZoom(maxZoom) {
    this.vectorLayer.setMaxZoom(maxZoom);
  }
}
export default MarkerLayer;

import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Heatmap as HeatmapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import WKT from 'ol/format/WKT';

class HeatMapLayer {
  constructor(mapInstance, options) {
    this.map = mapInstance;
    this.options = {
      // 默认配置
      defaultConfig: {
        radius: 10,
        blur: 15,
        gradient: ['#00f', '#0ff', '#0f0', '#ff0', '#f00'],
        weight: 'weight'
      },
      // 图层层级
      zIndex: 5
    };
    this.options = Object.assign(this.options, options);

    // 存储所有热力图图层
    this.layers = new Map();
    
    // 创建GeoJSON和WKT解析器
    this.geoJSONFormat = new GeoJSON();
    this.wktFormat = new WKT();
  }

  /**
   * 添加热力图图层
   * @param {Object} options 图层配置
   * @param {string} options.id 图层唯一标识
   * @param {string} options.name 图层名称
   * @param {Object|string} options.data GeoJSON对象或WKT字符串
   * @param {string} options.type 数据类型：'geojson' 或 'wkt'
   * @param {Object} options.config 热力图配置
   * @param {boolean} options.visible 是否可见
   * @returns {HeatmapLayer} 创建的热力图图层
   */
  addLayer(options) {
    const { id, name, data, type, config = {}, visible = true } = options;
    
    if (this.layers.has(id)) {
      console.warn(`图层ID ${id} 已存在，将被覆盖`);
      this.removeLayer(id);
    }

    // 创建矢量数据源
    const vectorSource = new VectorSource();
    
    // 根据数据类型解析数据
    let features;
    if (type === 'geojson') {
      features = this.geoJSONFormat.readFeatures(data);
    } else if (type === 'wkt') {
      features = this.wktFormat.readFeatures(data);
    } else {
      throw new Error('不支持的数据类型');
    }

    // 添加要素到数据源
    vectorSource.addFeatures(features);

    // 创建热力图图层
    const layerConfig = {
      ...this.options.defaultConfig,
      ...config
    };

    const heatmapLayer = new HeatmapLayer({
      source: vectorSource,
      ...layerConfig,
      visible,
      zIndex: this.options.zIndex
    });

    // 存储图层信息
    this.layers.set(id, {
      layer: heatmapLayer,
      name,
      source: vectorSource
    });

    // 将图层添加到地图
    this.map.addLayer(heatmapLayer);

    return heatmapLayer;
  }

  /**
   * 移除图层
   * @param {string} id 图层ID
   */
  removeLayer(id) {
    const layerInfo = this.layers.get(id);
    if (layerInfo) {
      this.map.removeLayer(layerInfo.layer);
      layerInfo.source.clear();
      this.layers.delete(id);
    }
  }

  /**
   * 更新图层数据
   * @param {string} id 图层ID
   * @param {Object|string} data 新的GeoJSON对象或WKT字符串
   * @param {string} type 数据类型：'geojson' 或 'wkt'
   */
  updateLayerData(id, data, type) {
    const layerInfo = this.layers.get(id);
    if (!layerInfo) {
      throw new Error(`图层ID ${id} 不存在`);
    }

    // 清除现有数据
    layerInfo.source.clear();

    // 解析新数据
    let features;
    if (type === 'geojson') {
      features = this.geoJSONFormat.readFeatures(data);
    } else if (type === 'wkt') {
      features = this.wktFormat.readFeatures(data);
    } else {
      throw new Error('不支持的数据类型');
    }

    // 添加新数据
    layerInfo.source.addFeatures(features);
  }

  /**
   * 更新图层配置
   * @param {string} id 图层ID
   * @param {Object} config 新的配置
   */
  updateLayerConfig(id, config) {
    const layerInfo = this.layers.get(id);
    if (!layerInfo) {
      throw new Error(`图层ID ${id} 不存在`);
    }

    layerInfo.layer.setProperties(config);
  }

  /**
   * 显示图层
   * @param {string} id 图层ID
   */
  showLayer(id) {
    const layerInfo = this.layers.get(id);
    if (layerInfo) {
      layerInfo.layer.setVisible(true);
    }
  }

  /**
   * 隐藏图层
   * @param {string} id 图层ID
   */
  hideLayer(id) {
    const layerInfo = this.layers.get(id);
    if (layerInfo) {
      layerInfo.layer.setVisible(false);
    }
  }

  /**
   * 获取图层
   * @param {string} id 图层ID
   * @returns {HeatmapLayer} 热力图图层
   */
  getLayer(id) {
    const layerInfo = this.layers.get(id);
    return layerInfo ? layerInfo.layer : null;
  }

  /**
   * 获取所有图层
   * @returns {Map} 所有图层信息
   */
  getAllLayers() {
    return this.layers;
  }

  /**
   * 清除所有图层
   */
  clearAllLayers() {
    this.layers.forEach((layerInfo, id) => {
      this.removeLayer(id);
    });
  }

  /**
   * 销毁所有图层
   */
  destroy() {
    this.clearAllLayers();
    this.layers.clear();
  }
}

export default HeatMapLayer;

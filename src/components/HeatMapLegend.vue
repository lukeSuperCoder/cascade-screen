<template>
  <div class="heatmap-legend">
    <div class="legend-title">Level</div>
    <div class="legend-content">
      <div class="gradient-bar" :style="gradientStyle"></div>
      <div class="legend-labels">
        <span>{{ maxValue }}</span>
        <span>{{ minValue }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeatMapLegend',
  props: {
    // 颜色渐变数组
    gradient: {
      type: Array,
      default: () => ['#00f', '#0ff', '#0f0', '#ff0', '#f00']
    },
    // 最小值
    minValue: {
      type: [Number, String],
      default: 0
    },
    // 最大值
    maxValue: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    gradientStyle() {
      const gradientColors = this.gradient.join(', ');
      return {
        background: `linear-gradient(to top, ${gradientColors})`
      };
    }
  }
}
</script>

<style scoped>
.heatmap-legend {
  color: #FFF;
  @apply fixed bottom-12 right-2 bg-black/90 rounded-lg p-4 shadow-lg;
  min-width: 140px;
  pointer-events: none;  /* 允许点击穿透 */
}

.legend-title {
  @apply text-sm font-medium text-white mb-3 text-center;
  pointer-events: auto;  /* 恢复文字的可点击性 */
}

.legend-content {
  @apply flex flex-col items-center;
  pointer-events: auto;  /* 恢复内容的可点击性 */
}

.gradient-bar {
  @apply w-6 h-40 rounded-md;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
}

.legend-labels {
  @apply w-full flex justify-between mt-3 text-xs text-white;
  padding: 0 2px;
}
</style> 
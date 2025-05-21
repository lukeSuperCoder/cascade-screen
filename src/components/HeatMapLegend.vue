<template>
  <div class="heatmap-legend">
    <div class="legend-title">Economic Loss</div>
    <div class="legend-content">
      <div class="gradient-bar" :style="gradientStyle"></div>
      <div class="legend-labels">
        <span class="vertical-text">{{ 0 }}</span>
        <span class="vertical-text">{{ 10000 }}</span>
        <span class="vertical-text">{{ 20000 }}</span>
        <span class="vertical-text">{{ 30000 }}</span>
        <span class="vertical-text">{{ 40000 }}</span>
        <span class="vertical-text">{{ 50000 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeatMapLegend',
  props: {
    minValue: {
      type: Number,
      default: 1
    },
    maxValue: {
      type: Number,
      default: 50000
    }
  },
  computed: {
    midValue1() {
      return Math.round(this.maxValue / 3);
    },
    midValue2() {
      return Math.round((this.maxValue * 2) / 3);
    },
    gradientStyle() {
      return {
        background: `linear-gradient(to top, 
          rgba(255, 0, 0, 0.85) 0%,
          rgba(255, 165, 0, 0.85) 33.33%,
          rgba(255, 255, 0, 0.85) 66.66%,
          rgba(0, 255, 0, 0.85) 100%
        )`
      };
    }
  },
  methods: {
    formatValue(value) {
      return value.toLocaleString();
    }
  }
}
</script>

<style scoped>
.heatmap-legend {
  color: #FFF;
  @apply fixed bottom-12 right-2 bg-black/90 backdrop-blur-md rounded-lg p-4 shadow-lg;
  min-width: 120px;
  pointer-events: none;
  @apply border border-gray-700/50;
}

.legend-title {
  @apply text-sm font-medium text-gray-300 mb-3 text-center;
  pointer-events: auto;
}

.legend-content {
  @apply flex items-center justify-center gap-3;
  pointer-events: auto;
}

.gradient-bar {
  @apply w-6 h-40 rounded-md;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
}

.legend-labels {
  @apply flex flex-col justify-between h-40 text-xs text-gray-400;
  padding: 0 2px;
}

.vertical-text {
  text-align: left;
  @apply whitespace-nowrap;
}

.legend-labels span:first-child {
  @apply mb-0;
}

.legend-labels span:last-child {
  @apply mt-0;
}
</style> 
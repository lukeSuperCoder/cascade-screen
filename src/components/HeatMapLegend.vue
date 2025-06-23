<template>
  <div class="heatmap-legend">
    <!-- <div class="legend-title">Cumulative Loss</div>
    <div class="legend-text">(100%)</div>
    <div class="legend-content">
      <div class="gradient-bar" :style="gradientStyle"></div>
      <div class="legend-labels">
        <span class="vertical-text">{{ 0 }}</span>
        <span class="vertical-text">{{ 2 }}</span>
        <span class="vertical-text">{{ 4 }}</span>
        <span class="vertical-text">{{ 6 }}</span>
        <span class="vertical-text">{{ 8 }}</span>
        <span class="vertical-text">{{ 10 }}</span>
      </div>
    </div>
    <br> -->
    <div class="legend-title">Eco Intensity</div>
    <div class="legend-text">(100%)</div>
    <div class="legend-content">
      <div class="circle-size-legend">
        <div class="circle" :style="{ width: '24px', height: '24px' }"></div>
        <div class="circle" :style="{ width: '20px', height: '20px' }"></div>
        <div class="circle" :style="{ width: '16px', height: '16px' }"></div>
        <div class="circle" :style="{ width: '12px', height: '12px' }"></div>
        <div class="circle" :style="{ width: '8px', height: '8px' }"></div>
      </div>
      <div class="legend-labels">
        <span class="vertical-text">{{ 1 }}</span>
        <span class="vertical-text">{{ 25 }}</span>
        <span class="vertical-text">{{ 50 }}</span>
        <span class="vertical-text">{{ 75 }}</span>
        <span class="vertical-text">{{ 100 }}</span>
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
      default: 0
    },
    maxValue: {
      type: Number,
      default: 1.5
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
          rgb(178, 24, 43, 0.85) 0%,
          rgb(214, 96, 77, 0.85) 20%,
          rgb(239, 138, 98, 0.85) 40%,
          rgb(247, 247, 247, 0.85) 50%,
          rgb(103, 169, 207, 0.85) 60%,
          rgb(33, 102, 172, 0.85) 80%,
          rgb(5, 48, 97, 0.85) 100%
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
.legend-text {
  @apply text-xs  text-gray-300 mb-3 text-center;
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

.circle-size-legend {
  @apply flex flex-col justify-between items-center h-40;
  padding: 0 2px;
}

.circle {
  @apply bg-white rounded-full;
  opacity: 0.85;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
</style> 
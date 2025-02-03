<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="45"
    viewBox="-8 25 110 43"
    :class="{ dark: isDark }"
    class="cursor-pointer rounded-full w-[92px] h-[48px]"
  >
    <!-- Fundo do botão -->
    <rect
      id="bg"
      class="transition overflow-hidden"
      x="0"
      y="25"
      rx="20"
      ry="20"
      width="90"
      height="43"
      fill="#13132d"
      stroke="#ffffff"
      stroke-width="2"
    />

    <!-- ClipPath para limitar os elementos ao rect -->
    <clipPath id="rect-clip">
      <rect
        x="0"
        y="25"
        width="90"
        height="43"
        rx="20"
        ry="20"
      />
    </clipPath>

    <!-- Máscara para as crateras -->
    <clipPath id="moon-clip">
      <circle
        cx="25"
        cy="47"
        r="18"
      />
    </clipPath>

    <!-- Elementos limitados ao rect -->
    <g clip-path="url(#rect-clip)">
      <!-- Lua e Sol -->
      <circle
        id="main-circle"
        class="transition"
        cx="25"
        cy="47"
        r="18"
        fill="#b0b0b0"
      />

      <!-- Crateras da lua com máscara -->
      <g
        id="craters"
        class="transition"
        clip-path="url(#moon-clip)"
      >
        <circle
          cx="15"
          cy="35"
          r="5"
          fill="#8c8c8c"
        />
        <circle
          cx="25"
          cy="40"
          r="3"
          fill="#8c8c8c"
        />
        <circle
          cx="10"
          cy="56"
          r="8"
          fill="#8c8c8c"
        />
        <circle
          cx="39"
          cy="48"
          r="5"
          fill="#8c8c8c"
        />
        <circle
          cx="25"
          cy="58"
          r="2.5"
          fill="#8c8c8c"
        />
      </g>

      <!-- Nuvens -->
      <g
        id="clouds"
        class="transition"
      >
        <!-- Nuvem 1 -->
        <g
          id="cloud1"
          transform="translate(11, 40)"
        >
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="#d9d9d9"
          />
          <circle
            cx="5"
            cy="0"
            r="5"
            fill="#d9d9d9"
          />
          <circle
            cx="10"
            cy="0"
            r="4"
            fill="#d9d9d9"
          />
          <circle
            cx="5"
            cy="3"
            r="6"
            fill="#d9d9d9"
          />
        </g>
        <!-- Nuvem 2 -->
        <g
          id="cloud2"
          transform="translate(27, 53)"
        >
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="#d9d9d9"
          />
          <circle
            cx="7"
            cy="0"
            r="6"
            fill="#d9d9d9"
          />
          <circle
            cx="14"
            cy="0"
            r="5"
            fill="#d9d9d9"
          />
          <circle
            cx="7"
            cy="3"
            r="7"
            fill="#d9d9d9"
          />
        </g>
      </g>

      <!-- Estrelas -->
      <g
        id="stars"
        class="transition"
      >
        <!-- Estrela superior -->
        <path
          id="star1"
          d="M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
           l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
          transform="scale(0.4) translate(150, 70)"
          fill="#fff"
        />
        <!-- Estrela inferior -->
        <path
          id="star2"
          d="M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
           l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
          transform="scale(0.4) translate(118, 90)"
          fill="#fff"
        />
        <!-- Estrela esquerda -->
        <path
          id="star3"
          d="M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
           l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
          transform="scale(0.4) translate(180, 90)"
          fill="#fff"
        />
        <!-- Estrela direita -->
        <path
          id="star4"
          d="M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
           l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
          transform="scale(0.4) translate(150, 140)"
          fill="#fff"
        />
        <!-- Pequena estrela -->
        <path
          id="star5"
          d="M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
           l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
          transform="scale(0.3) translate(180, 155)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  isDark: Boolean,
})
</script>

<style scoped>
/* Transições */
.transition {
  @apply transition-all duration-300 ease-in-out;
}

/* Background */
svg:not(.dark) #bg {
  fill: #47cfff;
}

/* Movimento da Lua e Nuvens */
svg:not(.dark) #main-circle {
  transform: translateX(43px);
  fill: #fee253;
}
svg:not(.dark) #craters {
  transform: translateX(43px);
  opacity: 0;
}
svg:not(.dark) #stars {
  transform: translateX(60px);
}
svg.dark #clouds {
  transform: translateX(-80px);
}
</style>

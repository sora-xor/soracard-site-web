<script setup lang="ts">
import nav from '@/lib/constants/navigation'

const isModalOpen = useApplyModalState()

const navRef = ref(nav.map(el => ({ ...el, isOpen: false })))

const toggleAccordion = (i: number) => {
  if (navRef.value[i].isOpen) {
    navRef.value[i].isOpen = false
  } else {
    navRef.value.forEach((el, j) => {
      el.isOpen = i === j
    })
  }
}
</script>

<template>
  <nav>
    <ul class="groups">
      <li v-for="(group, i) in navRef" :key="group.title" :class="{ open: group.isOpen }" class="group">
        <div @click="toggleAccordion(i)" class="group-title p-xs bold">
          <span :data-title="group.title">{{ group.title }}</span>
        </div>
        <div class="links">
          <div>
            <ul>
              <li v-for="(item, i) in group.links" :style="`--delay: ${i * 0.05}s`">
                <button v-if="(typeof item === 'string')" class="link hover-trigger px-xs py-3xs mx-auto"
                  @click="isModalOpen = true">
                  <span class="hover-underline">Apply</span>
                </button>
                <NuxtLink v-else :href="item.href" class="link hover-trigger px-xs py-3xs">
                  <span class="hover-underline">{{ item.title }}</span>
                  <img v-if="item.isExternal" src="/icons/external.svg" alt="external link icon" class="external">
                  <span v-if="item.label" class="label bold rounded">{{ item.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
}

ul,
li {
  padding: 0;
  margin: 0;
}

.group li {
  opacity: 0;
  visibility: hidden;
  transform: translateY(3rem) scaleY(0.75);
  transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease), transform 1s var(--ease);
}

.group-title {
  display: flex;
  align-items: center;
  gap: var(--space-3xs);
}

.group-title::after {
  content: '';
  width: 1.2em;
  height: 1.2em;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgOUwxMiAxNUwxOCA5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+");
  background-size: contain;
  transition: transform 1s var(--ease);
}

.link {
  display: flex;
  gap: 0.4em;
  justify-content: center;
  align-items: center;
}

.external {
  width: 1em;
  height: 1em;
  object-fit: contain;
  opacity: 0.5;
}

.label {
  text-transform: uppercase;
  padding: 1px 4px 0 4px;
  display: inline-flex;
  font-size: 1rem;
  margin-right: -1.5em;
  border: 1px solid var(--color-accent);
}

@media (max-width: 959px) {
  .group {
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  }

  .group-title {
    cursor: pointer;
    justify-content: space-between;
  }

  .group>.links {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 1s var(--ease);
    overflow: hidden;
    text-align: center;
  }

  .links>* {
    min-height: 0;
  }

  .group.open>.links {
    grid-template-rows: 1fr;
  }

  .group.open li {
    opacity: 1;
    visibility: unset;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .links ul {
    padding-bottom: var(--space-s);
  }

  .group.open .group-title::after {
    transform: rotateX(-180deg);
  }
}

@media (min-width: 960px) {
  .groups {
    display: flex;
    justify-content: center;
  }

  .group {
    position: relative;
    cursor: pointer;
  }

  .links {
    position: absolute;
    right: 50%;
    background-color: var(--color-light1);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    transform-origin: top;
    transform: translateX(50%) scaleY(0.9);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease), transform 1s var(--ease);
    width: fit-content;
    text-align: center;
    padding: var(--space-s) var(--space-m);
  }

  .links a {
    white-space: nowrap;
  }

  .group:hover {
    z-index: 2;
  }

  .group:hover .links {
    opacity: 1;
    visibility: unset;
    transform: translateX(50%);
  }

  .group:hover li {
    opacity: 1;
    visibility: unset;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .group:hover .group-title::after {
    transform: rotateX(-180deg);
  }

  .group:has(.group-title:active) .links {
    transform: translateX(50%) scale(1.05);
  }
}

@media (min-width: 960px) and (hover:hover) {
  .group-title>span {
    color: transparent;
    position: relative;
    overflow: hidden;
  }

  .group-title>span::before,
  .group-title>span::after {
    content: attr(data-title);
    color: var(--color-dark1);
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 1s var(--ease);
  }

  .group-title>span::after {
    transform: translateY(100%) scaleY(0.5);
  }

  .group:hover .group-title>span::before {
    transform: translateY(-100%) scaleY(0.5);
  }

  .group:hover .group-title>span::after {
    transform: translateY(0);
  }
}
</style>
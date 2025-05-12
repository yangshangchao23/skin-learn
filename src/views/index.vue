<script setup lang="ts">
import { TabList } from '@/constants'

const activeKey = ref('announce')
const router = useRouter()
</script>

<template>
  <div class="index w-full">
    <a-tabs v-model:activeKey="activeKey" type="card" size="large">
      <a-tab-pane v-for="tab in TabList" :key="tab.id" :tab="tab.title">
        <a-list size="small" :data-source="tab.list" bordered>
          <template #header>
            <div class="border-l-4 border-[#1677ff] px-4 py-2">猜您想办</div>
          </template>
          <template #renderItem="{ item, index }">
            <a-list-item @click="router.push({ path: '/detail', query: { id: item.id } })">
              <div class="cursor-pointer truncate py-1" :title="item.title">
                <span class="mr-3">{{ index + 1 }}.</span>{{ item.title }}
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped lang="scss">
.index {
  &:deep(.ant-tabs) {
    .ant-tabs-content {
      display: flex;
      flex-direction: column;
    }
  }
  &:deep(.ant-list) {
    overflow: hidden;
    .ant-list-header {
      padding: 0;
      background-image: linear-gradient(90deg, #1677ff, #fff);
      color: #fff;
      border: 0;
    }
    .ant-spin-container {
      height: 80vh;
      overflow-y: auto;
    }
  }
}
</style>

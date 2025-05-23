<script setup lang="ts">
import { DoubleLeftOutlined } from '@ant-design/icons-vue'
const router = useRouter()
const goHandle = () => {
  console.log('goHandle')
}

const stepList = [
  {
    id: '1',
    title: '印花税',
    list: [
      {
        id: '1.1',
        title: '新增税种-印花税'
      },
      {
        id: '1.2',
        title: '税源采集'
      }
    ]
  },
  {
    id: '2',
    title: '房产税',
    list: [
      {
        id: '2.1',
        title: '新增税种-房产税'
      },
      {
        id: '2.2',
        title: '税源采集'
      }
    ]
  },
  {
    id: '3',
    title: '不动产租赁代开发票',
    list: [
      {
        id: '3.1',
        title: '填写申请单集'
      }
    ]
  }
]
</script>
<template>
  <div class="back-btn">
    <a-button size="large" type="link" @click="router.go(-1)">
      <template #icon>
        <DoubleLeftOutlined />
      </template>
      返回
    </a-button>
  </div>
  <div class="prose w-full text-center"><h3>出租不动产代开</h3></div>
  <div class="detail-step mt-6">
    <a-steps direction="vertical">
      <a-step status="process" v-for="(step, index1) in stepList" :key="step.id">
        <template #title>
          <div class="text-lg font-bold">{{ step.title }}</div>
        </template>
        <template #description>
          <div class="border-b border-gray-200 pb-4">
            <div class="p-2">
              <div v-for="(item, index2) in step.list" :key="item.id">
                {{ `${index1 + 1}.${index2 + 1} ${item.title}` }}
              </div>
            </div>
            <a-button @click="goHandle" type="primary" ghost>前往办理</a-button>
          </div>
        </template>
      </a-step>
    </a-steps>
  </div>
</template>

<style scoped lang="scss">
.back-btn {
  &:deep(.ant-btn) {
    display: flex;
    align-items: center;
  }
}
.detail-step {
  &:deep(.ant-steps) {
    .ant-steps-item-tail {
      &::after {
        background-color: var(--ant-primary-color);
      }
    }
  }
}
</style>

<script setup lang="ts">
interface Job {
  picture: String
  title: String
  description: String
  tool: String
  position: String
}
const props = defineProps<{ job: Job }>()
</script>

<template>
  <div class="card">
    <div class="card-top" :style="{ backgroundImage: `url(${job.picture})` }">
      <h3 class="card-title">
        {{ props.job.title }}
        <small class="card-title-subtext">
          <small v-if="props.job.position">
            <i class="fa-solid fa-user-tie"></i>
            {{props.job.position}}
          </small>
          <small v-if="props.job.tool">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            {{props.job.tool}}
          </small>
        </small>
      </h3>
    </div>
    <div class="card-bottom">
      <span class="card-description">{{ props.job.description }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 2.5rem;
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-top,
.card-bottom {
  background: no-repeat center;
  background-size: cover;
}


.card-top {
  min-height: 20rem;
  border-radius: .125rem .125rem 0 0;
}

.card-bottom {
  border-radius: 0 0 .125rem .125rem;
  background-color: rgb(22, 19, 20);
  color: white;
  font-size: 1.25rem;
  padding: 1rem 2rem;
}

.card .card-title {
  font-weight: bold;
  padding: 1rem;
  background-color: rgba(22, 19, 20, .85);
  color: #6c8ead;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

.card-title-subtext {
  display: flex;
  font-size: 1.25rem;
  gap: 1rem;
}

.card:hover {
  cursor: pointer;
  transform: scale(0.97);
}

.card:hover .card-content {
  transform: scale(0.96);
}

.card:hover .card-image svg {
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.9);
}
</style>

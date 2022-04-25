<template>
  <article>
    <header>
      <div>
        <div>{{ option.title }}</div>
        <div v-if="option.standard">전일 기준</div>
      </div>
    </header>
    <ul>
      <li class="list" v-for="(list, idx) in option.list" :key="idx">
        <dl>
          <dt>
            <img :src="list.src" alt="logo" />
            {{ list.name }}
          </dt>
          <dd>
            <ul>
              <li>{{ list.percentage }}%</li>
              <li>{{ formatPrice(list.price) }}원</li>
            </ul>
          </dd>
        </dl>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
article {
  margin: 0 50px;
}

header {
  display: flex;
  justify-content: center;
  margin: 20px 0 10px;
}

header > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

img {
  width: 50px;
  height: 50px;
}

.list {
  display: flex;
  margin: 20px 0;
}

ul {
  margin: 0 auto;
}

li {
  list-style: none;
}

dl {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

dt {
  display: flex;
  line-height: 2.5;
}

dd > ul > li {
  text-align: end;
}
</style>
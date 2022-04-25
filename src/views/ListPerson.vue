<template>
  <div>
    <el-table :data="persons">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>

    <el-table :data="persons2">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      persons: [],
      persons2: [],
    };
  },
  created() {
    console.log("request persons");
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get("test").then((res) => {
        console.log(res);
        this.persons = res.data.result;
      });
      this.$http.post("test2", { name: "zs" }).then((res) => {
        console.log(res);
        this.persons2 = res.data.result;
      });
    },
  },
};
</script>

<style scoped>
</style>

<template>
    <div class="bg">
        <div class="container">
            <div class="searchBox">
                <label for="search" class="searchLabel">搜尋</label>
                <input type="text" size="30" placeholder="想要搜尋啥呢?" id="search" @keypress.enter="searchSend" v-model="txt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            txt: '',
        }
    },
    methods: {
        searchSend() {
            this.$store.commit('setSearchTxt', this.txt);
        }
    }
}
</script>

<style scoped>
.bg {
    background-color: #008844;
    width: 100%;
    height: 64px;
}
.container {
    width: 60%;
    height: 95%;
    margin-left: 20%;
}
.searchBox {
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#search {
    margin-left: 2.4%;
    width: 400px;
    height: 32px;
    border-radius: 4px;
    padding-left: 12px;
    padding-top: 4px;
    font-size: 20px;
}
.searchLabel {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}
</style>
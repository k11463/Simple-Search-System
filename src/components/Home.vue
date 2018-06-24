<template>
    <div class="bg">
        <div class="container">
            <div class="itemBox">
                <ul>
                    <li v-for="data in filteredDatas">
                        <div class="title">{{data.title}}</div>
                        <div class="content">{{data.content}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const datas = [
            {
                title: '今天幾點下課?',
                content: '啊~~好慢喔'
            },
            {
                title: '音樂好聽',
                content: '诶~~ 水喔'
            },
            {
                title: '現在時間',
                content: '2018/6/22 下午 06:27分'
            },
            {
                title: '爛Citra模擬器',
                content: '害我日月一直當機根本玩不了'
            },
            {
                title: '假資料',
                content: '在做兩筆就好'
            },
            {
                title: '現在聽的音樂',
                content: '童話魔法使OP'
            },
            {
                title: '身體狀況',
                content: '感覺脊椎側彎有點嚴重了'
            },
            {
                title: '最後一筆',
                content: '假資料完畢'
            }
        ]
        return {
            datas: datas,
            filteredDatas: datas
        }
    },
    computed: {
        watchVuexSearchTxt() {
            return this.$store.state.searchTxt;
        }
    },
    watch: {
        watchVuexSearchTxt() {
            let vuexTxt = this.$store.state.searchTxt;
            this.filteredDatas = [];
            if (this.$store.state.searchTxt == "") {
                this.filteredDatas = this.datas;
            }
            else {
                this.filteredDatas = this.datas.slice().filter(data => {
                    return data.title.toLowerCase().includes(vuexTxt.toLowerCase());
                })
            }
        }
    }
}
</script>

<style scoped>
.bg {
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
}
.container {
    width: 60%;
    margin-left: 20%;
}
.itemBox {
    width: 100%;
    padding-top: 3.2%;
}
ul {
    width: 100%;
    list-style: none;
}
li {
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #ddd;
    margin-top: 2.4%;
}
li .title {
    width: 100%;
    height: 24px;
}
li .content {
    width: 100%;
    height: 48px;
}
</style>
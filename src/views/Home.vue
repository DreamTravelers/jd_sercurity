<template>
    <div class="about">
        <el-container>
        <el-header style="border-bottom: black 1px solid;height: 70px;">
            <div class="header">
               <div class="logo">
                    <div style="display: flex;align-items: center;gap: 10px;">
                        <el-image style="width: 50px; height: 50px" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" :fit="'fill'"></el-image>
                        <span class="logo-info">信息安全后台管理系统</span>
                    </div>
               </div>
               <div class="userInfo">
                <div  style="display: flex;align-items: center;gap: 10px;">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            jd<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
               </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px" style="padding-top: 10px;">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo">
                    <el-menu-item index="1" @click="handleOpen(1)">
                        <i class="el-icon-share"></i>
                        <span slot="title">已发布</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="handleOpen(2)">
                        <i class="el-icon-edit"></i>
                        <span slot="title">待发布</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="handleOpen(3)">
                        <i class="el-icon-user"></i>
                        <span slot="title">个人中心</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <Published v-if="curPage == 1"></Published>
                <Edit v-if="curPage == 2"></Edit>
                <Info v-if="curPage == 3"></Info>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
    import Edit from "./Edit.vue"
    import Published from "./Published.vue"
    import Info from "./Info.vue"

	export default {
        name:"Home",
        components:{
            Edit,
            Published,
            Info
        },
		data() {
			return {
                curPage : 1,
            }
        },
        methods: {
            handleOpen(idx) {
                this.curPage = idx
            }
        }
    }

</script>

<style>
.main{
    max-height: 85vh;
    overflow: scroll;
}

.el-menu-vertical-demo{
    height: 80vh;
}

.header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
}

.logo-info{
    font-size: 20px;
    font-weight: bold;
}

.main::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.main::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius   : 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
}
.main::-webkit-scrollbar-track {
/*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #ededed;
    border-radius: 10px;
}

</style>
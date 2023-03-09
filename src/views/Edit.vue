<template>
    <div class="edit">
        <el-row>
            <el-col :span="5">
                <div class="detail-header">
                        <span>待发布列表： </span>
                        <el-button style="margin-right: 20px;" size="mini" type="warning" round>新建任务</el-button>
                    </div>
                <div style="padding: 10px;padding-top: 25px; cursor: pointer; ">
                    <div @click="choose(idx)" v-for="(item,idx) in taskList" :key="idx" :class="curTask === item ? 'active' : ''">
                        <span style="padding-left: 15px;">任务ID : </span>
                        <span style="padding-left: 15px;">{{item}}</span>
                        <el-divider ></el-divider>
                    </div>
                </div>
            </el-col>
            <el-col :span="9" style="border-left: 1px grey solid;">
                <div style="margin-left: 30px;">
                    <div class="detail-header">
                        <span style="color: green;">【 10002 】 任务编辑 : </span>
                        <el-button size="mini" type="danger" round>删除任务</el-button>
                        <el-button size="mini" type="success" round>发布任务</el-button>
                    </div>

                    <div class="content">
                        <div style="width: 80px;">
                            <el-button size="mini" type="primary">选择文件<i class="el-icon-upload el-icon--right"></i></el-button>
                        </div>
                        <el-input placeholder="请输入内容" v-model="key">
                            <template slot="prepend">对称秘钥</template>
                        </el-input>
                        <el-input placeholder="请输入内容" v-model="jsonStr.task_ciphertext.AccessStruct">
                            <template slot="prepend">访问结构</template>
                        </el-input>

                        <div>
                            任务关键词： <el-button type="success" size="mini" icon="el-icon-circle-plus-outline" circle></el-button> 
                            <el-divider></el-divider>
                        </div>

                        <div>
                            <el-row style="padding: 5px; padding-left: 20px;">
                                <el-col :span="8">
                                    <span>通用关键词名</span>
                                </el-col>
                                <el-col :span="16">
                                    <span>关键词</span>
                                </el-col>

                                <el-col :span="8" style="padding: 10px; padding-left: 0;">
                                    <el-input v-model="vals.v1" placeholder="请输入内容"></el-input>
                                </el-col>
                                <el-col :span="16" style="padding: 10px; padding-left: 0;">
                                    <el-input v-model="vals.v2" placeholder="请输入内容"></el-input>
                                </el-col>

                                <el-col :span="8" style="padding: 10px; padding-left: 0;">
                                    <el-input v-model="vals.v3" placeholder="请输入内容"></el-input>
                                </el-col>
                                <el-col :span="16" style="padding: 10px; padding-left: 0;">
                                    <el-input v-model="vals.v4" placeholder="请输入内容"></el-input>
                                </el-col>
                            </el-row>
                        </div>

                        <div style="display:flex; justify-content: center;">
                            <div style="width: 100px; ">
                                <el-button type="success">生成</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="9" style="border-left: 1px grey solid;">
                <div v-if="showJson" style="margin-left: 30px;">
                    <div class="detail-header">
                        <span style="color: cadetblue;">【 10002 】 任务详情 : </span>
                    </div>
                    <json-viewer :value="jsonStr" :expand-depth=5 copyable boxed sort></json-viewer>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	export default {
        name:"Edit",
		data() {
			return {
                curTask:"10002",
                showJson:true,
                vals:{
                    v1:"CT1",
                    v2:"this is  CT1 - fqwfqgqeqq",
                    v3:"CT2",
                    v4:"this is  CT2 - qwfqgqfqfqf",
                },
                taskList:[
                    "10001",
                    "10002",
                    "10003",
                    "10004",
                    "10005",
                    "10006",
                ],
                key:"this is key",
                jsonStr:
                    {
                        "task_ciphertext": {
                            "AccessStruct": "this is a AccessStruct",
                            "CT1": "this is  CT1 - fqwfqgqeqq",
                            "CT2": "this is  CT2 - qwfqgqfqfqf",
                            "AttrCT": [
                                {
                                    "name": "this is  name -  qwfqgqfqwf",
                                    "Attr_i": "this is  Attr_i -  fqwfgqwfq",
                                    "D_i": "this is  D_i - qfegqwgqq"
                                }
                            ]
                        },
                        "task_word_ciphertext": {
                            "C1": "this is C1",
                            "C2": "this is C2",
                            "C3": [
                                {
                                    "name": "this is  name",
                                    "C_i": "this is  C_i"
                                }
                            ]
                        }
                    }
                
            }
        },
        methods: {
            choose(idx){
                this.curTask = this.taskList[idx]
            },
            isJSON(str) {
                if (typeof str == 'string') {
                    try {
                        var obj=JSON.parse(str);
                        if(typeof obj == 'object' && obj ){
                                return true;
                        }else{
                            return false;
                        }
            
                    } catch(e) {
                        return false;
                    }
                }else if (typeof str == 'object'  && str) {
                    return true;
                }
            },
            onSubumit(){
                if (!this.isJSON(this.jsonStr)){
                    this.$message.error(`json格式错误`)
                    return false
                }
                this.$message.success('json格式正确')
            }
        },
        mounted(){
            console.log(this.jsonStr.task_word_ciphertext)
        },
    }

</script>

<style>
.active{
    color: orange;
}

.detail-header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
}
.content{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}
</style>
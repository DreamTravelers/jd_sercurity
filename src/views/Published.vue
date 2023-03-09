<template>
    <div >
        <span>已发布任务列表：</span>
        <div class="published">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item v-for="(item,idx) in list" :title="'任务 UUID : ' + item.uuid" :name="idx">
                    <el-row>
                        <div>
                            <el-descriptions :column="2"  >
                                <el-descriptions-item label="uuid">{{item.uuid}}</el-descriptions-item>
                                <el-descriptions-item label="发表时间">{{item.publish_time}}</el-descriptions-item>
                            </el-descriptions>

                            <el-descriptions :column="1"  >
                                <el-descriptions-item label="任务密文" >
                                </el-descriptions-item>
                            </el-descriptions>
                        </div>
                    </el-row>
                    <el-row>
                        <div style="display: block; padding-left: 20px;" >
                                <el-descriptions :column="1" >
                                    <el-descriptions-item label="AccessStruct">{{item.task_ciphertext.AccessStruct}}</el-descriptions-item>
                                </el-descriptions>
                            </div>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div style="display: block; padding-left: 20px;" >
                                <el-descriptions :column="1" >
                                    <el-descriptions-item label="CT1">{{item.task_ciphertext.CT1}}</el-descriptions-item>
                                    <el-descriptions-item label="CT2">{{item.task_ciphertext.CT2}}</el-descriptions-item>
                                    <el-descriptions-item label="AttrCT"></el-descriptions-item>
                                </el-descriptions>

                                <div style="display: block; padding-left: 40px;" >
                                    <el-descriptions :column="1"  >
                                        <el-descriptions-item label="name">{{ item.task_ciphertext.AttrCT[0].name }}</el-descriptions-item>
                                        <el-descriptions-item label="Attr_i">{{ item.task_ciphertext.AttrCT[0].Attr_i }}</el-descriptions-item>
                                        <el-descriptions-item label="D_i">{{ item.task_ciphertext.AttrCT[0].D_i }}</el-descriptions-item>
                                    </el-descriptions>
                                </div>
                            </div>
                        </el-col>

                        <el-col :span="12" style="padding: 10px;padding-left: 30px; border-left: 1px solid #c9c9c9;">
                            <div>
                                <el-descriptions :column="1"  >
                                    <el-descriptions-item label="任务关键词密文" >
                                    </el-descriptions-item>
                                </el-descriptions>
                            </div>

                            <div style="display: block; padding-left: 20px;" >
                                <el-descriptions :column="1" >
                                    <el-descriptions-item label="C1">{{item.task_word_ciphertext.C1}}</el-descriptions-item>
                                    <el-descriptions-item label="C2">{{item.task_word_ciphertext.C2}}</el-descriptions-item>
                                    <el-descriptions-item label="C3"></el-descriptions-item>
                                </el-descriptions>
                            </div>

                            <div style="display: block; padding-left: 40px;" >
                                <el-descriptions :column="1"  >
                                    <el-descriptions-item label="name">{{ item.task_word_ciphertext.C3[0].name }}</el-descriptions-item>
                                    <el-descriptions-item label="C_i">{{ item.task_word_ciphertext.C3[0].C_i }}</el-descriptions-item>
                                </el-descriptions>
                            </div>
                        </el-col>
                    </el-row>
                    
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>

	export default {
        name:"Published",
		data() {
			return {
                activeNames: [],
                list:[
                    {
                        "uuid":"123141",
                        "publish_time":"2020-01-12",
                        "task_ciphertext": {
                            "AccessStruct": "this is a AccessStruct - qwerqqrqtfcasfewtwqfqwfqfwqqwerqqrqtfcasfewtwqfqwfqfwqqwerqqrqtfcasfewtwqfqwfqfwq",
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
                ]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            },
            deleteTask(idx){
                let _this = this
                this.$alert('确认删除任务' + this.list[idx].uuid, '任务删除', {
                    confirmButtonText: '确定',
                    callback: action => {
                        if(action === 'confirm'){
                            _this.list.splice(idx, 1);
                            _this.activeNames = []
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            });
                        }
                    }
                });
            },
            deepCopy(obj) {
                return JSON.parse(JSON.stringify(obj));
            }
        },
        mounted(){
            let repeatedArr = this.list[0]
            this.list = []
            for(let i = 0; i < 10; i++){
                this.list.push(this.deepCopy(repeatedArr))
                this.list[i].uuid = "1000" + i
            }

        },
    }

</script>

<style>
.published{
    padding: 20px;
    width: 90%;
}

.detail-header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
}
</style>
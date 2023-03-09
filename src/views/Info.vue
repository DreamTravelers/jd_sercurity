<template>
    <div class="info">
        <el-descriptions title="用户信息" :column="1">
            <el-descriptions-item label="用户名">{{ info.username }}</el-descriptions-item>
            <el-descriptions-item label="用户身份">{{ info.identity }}</el-descriptions-item>
            <el-descriptions-item label="public_key"></el-descriptions-item>
        </el-descriptions>

        <div style="padding-left: 40px;">
            <el-descriptions :column="1">
                <el-descriptions-item label="g">{{ info.public_key.g }}</el-descriptions-item>
                <el-descriptions-item label="h">{{ info.public_key.h }}</el-descriptions-item>
                <el-descriptions-item label="e">{{ info.public_key.e }}</el-descriptions-item>
                <el-descriptions-item label="pk_1">{{ info.public_key.pk_1 }}</el-descriptions-item>
                <el-descriptions-item label="pk_2">{{ info.public_key.pk_2 }}</el-descriptions-item>
                <el-descriptions-item label="pk_3">{{ info.public_key.pk_3 }}</el-descriptions-item>
                <el-descriptions-item label="pk_4">{{ info.public_key.pk_4 }}</el-descriptions-item>
                <el-descriptions-item label="pk_5">{{ info.public_key.pk_5 }}</el-descriptions-item>

            </el-descriptions>
        </div>
    </div>
</template>

<script>

	export default {
        name:"Info",
		data() {
			return {
                info:{
                    "username": "张三",
                    "identity": "task_publisher",
                    "public_key": {
                        "g": "this is g",
                        "h": "this is h",
                        "e": "this is e",
                        "pk_1": " this is pk_1",
                        "pk_2": " this is pk_2",
                        "pk_3": " this is pk_3",
                        "pk_4": " this is pk_4",
                        "pk_5": " this is pk_5"
                    }
                }
            }
        },
        methods: {

        }
    }

</script>

<style>
.info{
    padding: 30px;
}
</style>
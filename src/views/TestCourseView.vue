<template>
<!--  申请试课-->
  <div class="allmain">
    <div class = "block" >
      <el-row gutter="15">
        <el-col :span="6" >
          <!--            机构动态 左-->
          <div class="left">
            <!-- 动态栏上部分-->
            <el-row style="margin-bottom: 8px">
              <el-col :span="21">
                  <span class="block-left">
                    机构动态
                  </span></el-col>
              <el-col :span="3">
              <span class="block-right">
                更多>>
              </span>
              </el-col>
            </el-row>
            <div  >
              <ul>
                <li class="textInItem"
                    v-for="item in zswa"
                    :key="item">
                  {{item}}
                </li>
              </ul>
            </div>
          </div>

          <!--            左下-->
          <div class="left">
            <!--              机构动态栏上部分-->
            <el-row style="margin-bottom: 8px ">
              <el-col :span="21">
                  <span class="block-left">
                    机构动态
                  </span></el-col>
              <el-col :span="3">
              <span class="block-right">
                更多>>
              </span>
              </el-col>
            </el-row>
            <div  >
              <ul>
                <li class="textInItem"
                    v-for="item in zswa"
                    :key="item">
                  {{item}}
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <!--          右-->
        <el-col :span="18">
          <div class="right">
            <!--          顶部标题-->
            <div class="text-top">
              >>{{texttop}}
              <el-breadcrumb separator-class="el-icon-arrow-right" style="float: right;margin-right: 20px;font-size: 12px;margin-top: 3px">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{texttop}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>

            <hr style="margin: 10px ;color: #5a7679">
            <div class="formstyle">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="left">
                <el-form-item label="名 字：" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="联系方式：" prop="number" required>
                  <el-input v-model="ruleForm.number"></el-input>
                </el-form-item>


                <el-form-item label="课程选择："prop="course" required>
                  <el-col :span="11">
                    <el-select v-model="ruleForm.course" filterable placeholder="请选择试课课程">
                      <el-option
                          v-for="item in courses"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col class="line" :span="2">时间</el-col>
                  <el-col :span="11">
                    <el-select v-model="ruleForm.date" placeholder="请选择课程时间">
                      <el-option
                          v-for="item in dates"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                </el-form-item>

                <el-form-item label="备注：" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">报名</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>

          </div>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestCourseView",
  data() {
    return {
      texttop:'申请试课',
      textaboutus: '邮箱：1414313124@qq.com<br>联系电话：8888-8888-88 <br> 邮政编码：00000 <br> 地址：广州城市理工学院',
      zswa: ['本田预计2025年推无人驾驶汽车 比其他公司晚5年',
        '针对日本市场推出Link移动 VR 头盔:U11专属',
        '普及太快！我们该不该对机器人征税呢',
        '解放人类的双手 机器人尝试自主学习抓取物体'],
      state2: '',
      // test
      courses: [{
        value: '选项1',
        label: 'Java'
      }, {
        value: '选项2',
        label: 'C'
      }, {
        value: '选项3',
        label: 'C#'
      }, {
        value: '选项4',
        label: 'python'
      }, {
        value: '选项5',
        label: 'html'
      }],
      dates: [{
        value: '选项1',
        label: '2023-6-1 13：44'
      }, {
        value: '选项2',
        label: '2023-6-1 13：55'
      }, {
        value: '选项3',
        label: '2023-6-1 12：44'
      }, {
        value: '选项4',
        label: '2023-6-2 13：44'
      }, {
        value: '选项5',
        label: '2023-6-3 13：44'
      }],

      ruleForm: {
        name: '',
        number:'',
        course: '',
        date:'',
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入您的名字', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请输入您的联系方式', trigger: 'blur' },
          { min: 10, max: 12, message: '输入正确的手机号', trigger: 'blur' }
        ],
        course: [
          { required: true, message: '请输入您要试听的课程', trigger: 'blur' },
        ],
        data1: [
          { required: true, message: '请输入您要试听的时间', trigger: 'blur' },
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

},


}
</script>
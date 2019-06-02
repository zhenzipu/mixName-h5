<style lang="less" scoped>
.entrust {
  width: 20.9375rem;
  margin: 0 auto;
  .head {
    height: 1rem;
    margin-top: 1.5rem;
    .title {
      font-size: 0.875rem;
      line-height: 1rem;
      color: #333333;
    }
    p {
      float: right;
      font-size: 0.875rem;
      line-height: 1rem;
      i.icon_arrow {
        width: 1rem;
        height: 1rem;
        display: inline-block;
        background: url("../../images/arrow.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  .form-con {
    margin-top: 1.5rem;
    .form-label {
      line-height: 1.5rem;
    }
    .form-type-btn {
      text-align: center;
      line-height: 1.875rem;
      margin-top: 1.5rem;
    }
    .sel-type-btn {
      width: 5rem;
    }
    .large-btn {
      height: 2.5rem;
      margin: auto;
      margin-top: 1.25rem;
      border-radius: 0.3125rem;
      line-height: 2.5rem;
      text-align: center;
      color: #fff;
      background: linear-gradient(to right, blue, purple);
    }
    .btn-info {
      color: #999;
      line-height: 1.875rem;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="entrust">
    <!-- 头部 -->
    <div class="head">
      <span class="title">域名委托</span>
      <p>
        提交需求
        <i class="icon_arrow"></i>经济谈判
        <i class="icon_arrow"></i>完成需求
      </p>
    </div>
    <!-- 表单 -->
    <div class="form-con">
      <div>
        <p class="form-label">域名：</p>
        <p>
          <Input v-model="objForm.domain" placeholder="请输入域名"/>
        </p>
      </div>
      <div>
        <p class="form-label">称呼：</p>
        <p>
          <Input v-model="objForm.name" placeholder="请输入称呼"/>
        </p>
      </div>
      <div>
        <p class="form-label">手机：</p>
        <p>
          <Input v-model="objForm.phone" placeholder="请填写您的手机号，以便我们联系您"/>
        </p>
      </div>
      <div>
        <p class="form-label">预算：</p>
        <p>
          <Input v-model="objForm.budget" placeholder="请填写您的预算">
            <Select v-model="objForm.budget_type" slot="append" class="sel-type-btn">
              <Option value="0">人民币</Option>
              <Option value="1">美元</Option>
            </Select>
          </Input>
        </p>
      </div>
      <div>
        <p class="form-type-btn">
          <RadioGroup v-model="objForm.type">
            <Radio label="0">代售</Radio>
            <Radio label="1">代购</Radio>
          </RadioGroup>
        </p>
        <p class="large-btn" @click="handleSubmit">提交信息</p>
        <p class="btn-info">交易不成功不收取任何费用</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 提交信息
      objForm: {
        domain: "",
        name: "",
        phone: "",
        budget: "",
        budget_type: "0",
        type: "0"
      }
      //
    };
  },
  methods: {
    handleSubmit() {
      console.log("a", this.objForm);
    }
  }
};
</script>


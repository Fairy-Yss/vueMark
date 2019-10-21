;(function(){
    window.bottomContent={
        template:`<div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>性别</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <item v-for='(item,index) in empList' :key='item.id' :item='item' :deleteItem='deleteItem' :index='index'></item>
          </tbody>
        </table>
      </div>`,
      props:{
        empList:Array,
        deleteItem:Function
      },
      components:{
        item
      }
    }
})()
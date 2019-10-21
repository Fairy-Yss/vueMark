;(function(){
    window.item={
        template:`<tr>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.sex}}</td>
        <td><a href="#" @click='deleteItem'>删除</a></td>
      </tr>`,
         
      props:{
          item:{
              type:Object,
              required:true
          },
          deleteItem:Function,
          index:Number
      },
      methods:{
        deleteEmp(){
            this.deleteItem(this.index);
        }
      }
    }
})()
;(function(){
    window.rightContent={
        template:`<!--右边主页面区域: 分上下两个区域-->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <!--右边上半区域-->
          <!--<h1 class="page-header">Dashboard</h1>-->
          <!--定义插槽-->
          <slot name='dashBoard'></slot>
          <upper-content :hobbites='hobbites' @delete_hobby='deleteHobby'></upper-content>
          <!--右边下半区域-->
          <h2 class="sub-header">Section title</h2>
          <bottom-content :empList='empList' :deleteItem='deleteItem'></bottom-content>
        </div>`,
        components:{
            upperContent,
            bottomContent
        },

        data(){
            return {
                hobbites:['conding','打球','书法','唱歌'],
                empList:[
                    {id:'001',name:'zhangsan001',sex:'男'},
                    {id:'002',name:'zhangsan002',sex:'女'},
                    {id:'003',name:'zhangsan003',sex:'男'},
                    {id:'004',name:'zhangsan004',sex:'女'}
                ]
        }   
        },
        methods:{
            deleteItem(index){
                this.empList.splice(index,1);
            },
            deleteHobby(index){
                this.hobbites.splice(index,1);
                PubSub.publish('changeNum',1)
            }
        }
    }
})()
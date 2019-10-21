;(function(){
    window.App={
        template:`<!--头部导航区域--><div>
        <app-nav></app-nav>
        <!--核心区域:分左右两边-->
        <div class="container-fluid">
          <div class="row">
    
            <left-nav></left-nav>
            <right-content>
              <h1 class="page-header" slot='dashBoard'>{{dashboard}}</h1>
            </right-content>
            
          </div>
        </div>
        </div>`,
      components:{
        AppNav,
        leftNav,
        rightContent
      },
      data(){
        return {
          dashboard:"仪表盘"
        }
      }
    }
})()
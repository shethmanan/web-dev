import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js"

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("home")}
            </div>
            <div  class="col-md-4 col-lg-7 col-xl-6">
               ${PostList()}
            </div>
            <div  class="col-md-4 col-lg-7 col-xl-4">
                ${PostSummaryList()}
            </div>
            
        </div>
    `);
})($);


import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="col-11">
                    <div class="input-group border rounded-pill">
                        <span class="input-group-text bg-transparent border-0">
                            <i class="fas fa-search"></i>
                        </span>
                        <input type="text" placeholder="Search Twitter" class="form-control bg-transparent border-0 white-typer">
                    </div>
                </div>
                <div class="col-1 text-primary">
                    <i class="fas fa-cog fa-2x p-1 f-button-color"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
               <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#foryou">For you</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#trending">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#news">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#sports">Sports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#entertainment">Entertainment</a>
              </li>
           </ul>
           <ul class="list-group border-0">
                <li class="list-group-item border-0 m-0 p-0">
                    <div class="position-relative text-white">
                        <img src="../images/spacex.jpg" class="img-fluid" alt="tesla">
                        <div class="fw-bold fs-2 position-absolute" style="bottom: 10px; left: 10px;">
                            SpaceX's Starship
                        </div>
                    </div>
                </li>
            </ul>
           <!-- image with overlaid text  -->
           ${PostSummaryList()}
           
    `);
}
export default ExploreComponent;

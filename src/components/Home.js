import React from 'react'
import './Home.css';
import design2 from '../image/design2.png'
import DESIGN3 from '../image/DESIGN3.png'
import DESIGN4 from '../image/DESIGN4.png'
import peanut from '../image/peanut.png'
import eggs from '../image/eggs.png'
import dairy from '../image/dairy.png'
import soy1 from '../image/soy1.png'
import treenuts from '../image/treenuts1.png'
import sesame from '../image/sesame.png'
import fish from '../image/fish.png'
import wheat from '../image/wheat.png'
import shellfish from '../image/shellfish.png'
import design6 from '../image/design6.png'
import design7 from '../image/design7.png'
import design8 from '../image/design8.png'
import chip from '../image/chip.png'
import design9 from '../image/design9.png'
import design10 from '../image/design10.png'
import design11 from '../image/design11.png'
import design13 from '../image/i3.png'
import design14 from '../image/design14.png'
import design15 from '../image/design15.png'
import design16 from '../image/design16.png'
import design17 from '../image/design17.png'
import design18 from '../image/design18.png'
import des from '../image/des.png'

const Home = () => {
  return (
    <div>
<div>
<div class="container2 ">
  <div class="row">
    <div class="col">
      <div class="item5">
<h1 class="text-primary">cookies</h1>
<h4 class="text-primary">DISCOVER MORE</h4>
<img src={design2} height="400px" alt=''/>
</div>
    </div>
<div class="col">
  <div class="item6">
<h1 class="text-primary">Classic Grahams</h1>
<h4 class="text-primary">SHOP NOW</h4>
<img src={DESIGN3} height="400px" alt=''/>
 </div>
</div>
<div class="col">
  <div class="item7">
<h1 class="text-primary">Vanilla Wafers</h1>
<h4 class="text-primary">DISCOVER MORE</h4>
<img src={DESIGN4} height="400px" alt=' '/>
</div>
</div>
  </div>
</div>
</div>

<div class="container3 f14">
<div class="row">
  <div class="col-lg-12 col-md-4 col-sm-4 pt-4">
<div class="col">
  <div class="item8">
<h1 class="text-primary">Share With Confidence</h1>
<h4 class="text-primary">All Partake products are free of the top 9 allergens.</h4>
</div>
</div>
</div>

<div class="container-fluid mb-4 pb-5 pt-4 ">
  <div class="row">
    <div class="col ">
      <img src={peanut} width="140px" height="130px" alt=''/>
      <h3 class="ps-3">peanuts</h3>
      </div>
     
        <div class="col">
         
      <img src={eggs} width="150px" height="132px" alt=''/>
      <h3 class="ps-5">Egg</h3>
      </div>
        

        
          <div class="col">
      <img src={dairy} width="140px" height="130px" alt=''/>
      <h3 class="ps-4">Dairy</h3>
      </div>
      

        
          <div class="col">
      <img src={soy1} width="140px" height="130px" alt=''/>
      <h3 class="ps-5">Soy</h3>
      </div>
      
    
        
         <div class="col">
      <img src={treenuts} width="140px" height="130px" alt=''/>
      <h3 class="ps-3">Tree Nuts</h3>
      </div>
   

    
      <div class="col">
      <img src={sesame} width="150px" height="130px" alt=''/>
      <h3 class="ps-4">Sesame</h3>
      </div>
     

      
        <div class="col">
      <img src={fish} width="140px" height="130px" alt=''/>
      <h3 class="ps-5">Fish</h3>
     
    </div>

    
       <div class="col">
      <img src={wheat} width="140px" height="130px" alt=''/>
      <h3 class="ps-4">Wheat</h3>
      </div>
     
      
      
         <div class="col">
      <img src={shellfish} width="140px" height="130px" alt=''/>
      <h3 class="ps-3">Shellfish</h3>
      
     
    </div>
    </div>
  </div>
</div>

<div class="container5 pb-5 ps-2">
  <div class="fruit">
    <div class="f1 ps-2">
      <h1>Because <br/>
         ingredients <br/> matter.</h1>
    </div>
    <div class="f2 row">
      <div class="col-4 d-flex gap-3 pt-4">
      <img class="img-fluid" src={design6} width="140px" height="100px"alt='' />
      <img class="img-fluid" src={design7} width="140px" height="100px" alt=''/>
      <img class="img-fluid" src={design8} width="140px" height="100px" alt=''/>
      </div>
    </div>
  </div>


  <div class="fruit1">
 <div class="f3 ps-2">
<p>All of our products are baked with better-for-you, allergy-friendly ingredients <br/>like buckwheat, cassava, oats, and cinnamon so <br/>those with allergies and without can enjoy and<br/> share with confidence.</p>
    </div>
    <div class="f4 row">
      <div class="col-4 d-flex gap-3 pt-4">
      <img class="img-fluid" src={design9} width="140px" height="100px" alt=''/>
      <img class="img-fluid" src={design10} width="140px" height="100px" alt=''/>
      <img class="img-fluid" src={design11} width="140px" height="100px" alt='' />
      </div>
</div>
</div>
<h4 class="text-primary  f6 pb-2 ps-2">Learn More About Our Ingredients</h4>
</div>


<div class="container6 pb-5">
<div class="row">
<div class="col">
<h1>What's New</h1>
</div>
</div>

<div class="row ">
<div class="col">
  <img class="  pt-4 bg-primary" src={design13} width="350px" height="500px" alt=''/>
  <h4 class="ms-4 ps-3 pt-3 text-primary">Soft Baked Lemon Cookies </h4>
  <svg class="ms-5 ps-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
</div>
<div class="col">
  <img class=" pt-4 bg-info" src={design14} width="350px" height="500px" alt='..'/>
   <h4 class="pt-3 text-primary">Soft Baked Snickerdoodle Cookies</h4>
   <svg  class="ms-4 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
</div>
<div class="col">
  <img class=" pt-4 bg-primary" src={design15} width="350px" height="500px" alt=''/>
   <h4 class="pt-3 ms-3 text-primary ">Marvel Crunchy Super Hero <br/> Mini Cookie Snack Packs</h4>
    <svg class="ms-4"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
</div>
</div>
</div>

<div class="C  d-flex">
<div>
  <h1>Partake in your neighborhood.</h1>
</div>
<div>
  <h3 class="f7">Find A Store</h3>
</div>
</div>


<div class="container7 pb-5 f12">
<div class="row row2">
  <div class="col-6 col-md-2 col-lg-6 col-sm-2 d-flex justify-content-center ">
  <img  src={chip} width="310px" height="500px" alt=' '/>
  </div>
  <div class="col-6 col-md-2 col-lg-6 f13 ">
  <p>food content generally refers to the composition of nutrients and substances found in a particular food item.</p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

  </div>
</div>
</div>


<div class="container8">
  <div class="row">
    
      <img class="col-lg-6 col-md-6 col-sm-12" src={des} width="" alt=' ' height="500px"/>
   
   <div class="col-lg-6 col-md-6 col-sm-12 f8 ps-4">
    <h1 class="pt-4 f11">Building a <br/>
      Bigger Table</h1>
      <p class="text-muted">A portion of proceeds support families <br/>living with food insecurity.</p>
      <div class="d-flex pt-3">
      <svg class="pb-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg>
<h3 class="justify-content-cente ps-3 text-muted">Championing Food Inclusivity</h3>
</div>
<div class="d-flex pt-3">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-fork-knife" viewBox="0 0 16 16">
  <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z"/>
</svg>
<h3 class="justify-content-center ps-3 text-muted">Fighting Food Insecurity</h3>
</div>
<div class="d-flex pt-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z"/>
  <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z"/>
</svg>
  <h3 class="ps-3 text-muted">Creating Opportunities in CPG</h3>
</div>
<h3 class="pt-3  f10 text-muted">READ MORE</h3>
   </div>
  </div>
  <div class="row">
    <div class=" col-sm-12 col-md-4 col-lg-4 ">
      <img  src={design16} width="500px" alt=' ' height="500px"/>
   </div>
   <div class=" col-sm-12 col-md-4 col-lg-4 ">
      <img src={design17} width="500px" height="500px" alt=' '/>
   </div>
   
   <div class=" col-sm-12 col-md-4 col-lg-4 ">
      <img src={design18} width="500px" height="500px" alt=' '/>
     </div>
  </div>
</div>
</div>


<div class="container9">
  <div class="f15">
<h1>@PartakeFoods</h1>
<h6>FOLLOW US ON INSTAGRAM</h6>
  </div>
</div>

    </div>
  )
}

export default Home
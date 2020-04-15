const popupHTMLTemplate = `
<div class="popup-fixed-container">
  <div class="popup-padding-wrapper">
  <div class="location-header">{{name}}, {{st_stusps}}</div>

  <div class="overall-rating-container">
     <div class="title-and-number-container">
      <div class="rating-title">OVERALL RATING</div>
    </div>
    <div class="title-and-number-container overall">
      <div class="rating-title overall">{{prep_level}}</div>
      <div class="rating-number">{{prep_score}}</div>
    </div>
    <div class='gradient-container'>
      <div style="-webkit-transform: translateX(-12px)">
        <div class='gradient' />
      </div>
    </div>
  </div>
  
<!--   SUB-CATEGORIES: -->

  <div class="pillar-rating-container">
    <div class="title-and-number-container">
      <div class="rating-title">PHYSICAL CAPACITY</div>
       <div class="rating-number">{{pc_score}}</div>
    </div>
    <div class="bar-container">
      <div class="bar" />
    </div>
  </div>

  <div class="pillar-rating-container">
    <div class="title-and-number-container">
      <div class="rating-title">human resources</div>
       <div class="rating-number">{{hr_score}}</div>
    </div>
    <div class="bar-container">
      <div class="bar" />
    </div>
  </div>

  <div class="pillar-rating-container">
    <div class="title-and-number-container">
      <div class="rating-title">demographic</div>
       <div class="rating-number">{{dem_score}}</div>
    </div>
    <div class="bar-container">
      <div class="bar" />
    </div>
  </div>

  <div class="pillar-rating-container">
    <div class="title-and-number-container">
      <div class="rating-title">socio-economic</div>
       <div class="rating-number">{{se_score}}</div>
    </div>
    <div class="bar-container">
      <div class="bar" />
    </div>
  </div>

  <div class="pillar-rating-container">
    <div class="title-and-number-container">
      <div class="rating-title">Covid-19</div>
       <div class="rating-number">{{covid_score}}</div>
    </div>
    <div class="bar-container">
      <div class="bar" />
    </div>
  </div>
  
</div>
</div>



`

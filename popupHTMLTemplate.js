const popupHTMLTemplate = `

<div class="CDB-infowindow CDB-infowindow--dark js-infowindow">
	<div class="CDB-infowindow-close js-close"></div>
	<div class="CDB-infowindow-container">
		<div class="CDB-infowindow-bg">

			<div class="CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header" style="background: #191e21; padding-bottom: 16px;">
				<ul class="CDB-infowindow-list">
					<li class="CDB-infowindow-listItem">
						<h4 class="CDB-infowindow-title" style="font-size: 24px">
							{{name}}, {{st_stusps}}
						</h4>
					</li>
				</ul>
			</div>

			<div class="CDB-infowindow-inner js-inner">
				<ul class="CDB-infowindow-list js-content">

					<li class="CDB-infowindow-listItem" style="
	min-height: 3em;
	margin-top: 3em;
">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="position: absolute;left: 0px; top: 0;margin-top: -3em;font-size: 12px;text-transform: capitalize;">
									Preparedness Level:
								</div>

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 16px;
	font-style: bolder;
">{{prep_level}}</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 3em;
">{{prep_score}}</div>
							</div>

							<div class='bar-container' style="
                                  height: 12px;
                                  border-radius: 4px;
                                  position: relative;
                                  background: linear-gradient(90deg,#dc0302, #DD6F4C 20%, #1fadb6 50%,#77ff02);
                                  ">
								<div style="-webkit-transform: translateX(-12px)">
									<div class='bar' style="
					border-radius: 0px;
					height: 0px;
					width: 0px;
					position: absolute;
					left: {{prep_score}}%;
					top: -8px;
					border-left: 12px solid transparent;
					border-right: 12px solid transparent;
					border-top: 16px solid white;
					"/>
								</div>
							</div>


						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">Physical Capacity score</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{pc_score}}</div>
							</div>

							<div style="
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.6);
      ">
								<div style="
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{pc_score}}%;
        transition: width 0.8s;
        background-color: skyblue;
      "/>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">Human Resources score</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{hr_score}}</div>
							</div>

							<div style="
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.6);
      ">
								<div style="
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{hr_score}}%;
        transition: width 0.8s;
        background-color: skyblue;
      "/>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">Demographic score</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{dem_score}}</div>
							</div>

							<div style="
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.6);
      ">
								<div style="
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{dem_score}}%;
        transition: width 0.8s;
        background-color: skyblue;
      "/>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">Socio-Economic score</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{se_score}}</div>
							</div>

							<div style="
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.6);
      ">
								<div style="
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{se_score}}%;
        transition: width 0.8s;
        background-color: skyblue;
      "/>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">COVID-19 score</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{covid_score}}</div>
							</div>

							<div style="
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: rgba(10,10,10,0.6);
      ">
								<div style="
        border-radius: 4px;
        height: 100%;
        width: 0;
        width: {{covid_score}}%;
        transition: width 0.8s;
        background-color: skyblue;
      "/>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">Staff w/in 40min per 100k</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{total_staff_dt_100k}}</div>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">BEDS IN 40 MINS PER 100K</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{total_estimated_bed_40_mins_100k}}</div>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">PERCENT POP AGE > 65</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{pct_65_over_2018}}</div>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">CDC SVI</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{svi_socioeconomic}}</div>
							</div>

						</div>
					</li>

					<li class="CDB-infowindow-listItem" style="">
						<div style="min-height: 42px;">
							<div style="
	position: relative;
	padding-bottom: 4px;
	padding-top: 4px;

">

								<div class="CDB-infowindow-subtitle" style="
	position: absolute;
	left: 0px;
	bottom: 8px;
	font-size: 12px;

">ICU SHORTAGE AT PEAK PER 100K</div>
								<div class="CDB-infowindow-title" style="
	position: absolute;
	right: 8px;
	bottom: 8px;
	line-height: 1em;
	font-size: 2em;
">{{icuover_max_needed_100k}}</div>
							</div>

						</div>
					</li>

				</ul>
			</div>
		</div>

	</div>
</div>



`

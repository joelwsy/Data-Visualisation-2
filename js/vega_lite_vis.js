// Idiom 1: Geospatial Proportional Symbol Map
var vg_1 = "charts/01_geo_map.json";
vegaEmbed("#geo_map", vg_1).catch(console.error);

// Idiom 2: Diverging Bar + Nest Failure Line (vconcat)
var vg_2 = "charts/02_diverging_sst_failures.json";
vegaEmbed("#sst_failures", vg_2).catch(console.error);

// Idiom 3: Isotype Array of Seized Commodities
var vg_3 = "charts/03_isotype_seizures.json";
vegaEmbed("#isotype_seizures", vg_3).catch(console.error);

// Idiom 4: Dual-Axis Area + Line (Landings vs Seizures)
var vg_4 = "charts/04_landings_vs_seizures.json";
vegaEmbed("#landings_seizures", vg_4).catch(console.error);

// Idiom 5: Heatmap Seasonality + SST Line (vconcat)
var vg_5 = "charts/05_heatmap_seasonality.json";
vegaEmbed("#heatmap_season", vg_5).catch(console.error);

// Idiom 6: Paired Slope Graph (Legislation Impact)
var vg_6 = "charts/06_slope_legislation.json";
vegaEmbed("#slope_legislation", vg_6).catch(console.error);

// Idiom 7: Connected Scatterplot (Reproductive Yields)
var vg_7 = "charts/07_connected_scatter.json";
vegaEmbed("#connected_scatter", vg_7).catch(console.error);

// Idiom 8: Normalised Stacked Bar (Egg Disposition)
var vg_8 = "charts/08_stacked_bar_disposition.json";
vegaEmbed("#stacked_disposition", vg_8).catch(console.error);

// Idiom 9: Faceted Stacked Bar (Species-Specific Threats)
var vg_9 = "charts/09_faceted_black_market.json";
vegaEmbed("#faceted_threats", vg_9).catch(console.error);

// Idiom 10: Bullet Chart (Seizure Demographics)
var vg_10 = "charts/10_bullet_demographics.json";
vegaEmbed("#bullet_demographics", vg_10).catch(console.error);

// Idiom 11 (Bonus): Leatherback Collapse
var vg_11 = "charts/11_leatherback_collapse.json";
vegaEmbed("#leatherback_collapse", vg_11).catch(console.error);

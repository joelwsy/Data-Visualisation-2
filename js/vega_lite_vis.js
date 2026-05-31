var embedOpts = {
  renderer: "svg",
  actions: { export: true, source: false, compiled: false, editor: true }
};

vegaEmbed("#proportional_map",    "charts/01_proportional_map.json",   embedOpts).catch(console.error);
vegaEmbed("#decline_lines",       "charts/02_decline_lines.json",       embedOpts).catch(console.error);
vegaEmbed("#sst_nest_failure",    "charts/03_sst_nest_failure.json",    embedOpts).catch(console.error);
vegaEmbed("#sex_season_sst",      "charts/04_sex_season_sst.json",      embedOpts).catch(console.error);
vegaEmbed("#waffle_survival",     "charts/05_waffle_survival.json",     embedOpts).catch(console.error);
vegaEmbed("#isotype_blackmarket", "charts/06_isotype_blackmarket.json", embedOpts).catch(console.error);
vegaEmbed("#state_legislation",   "charts/07_state_legislation.json",   embedOpts).catch(console.error);
vegaEmbed("#sabah_scatter",       "charts/08_sabah_scatter.json",       embedOpts).catch(console.error);
vegaEmbed("#tourism_collision",   "charts/09_tourism_collision.json",   embedOpts).catch(console.error);
vegaEmbed("#melaka_slopegraph",   "charts/10_melaka_slopegraph.json",   embedOpts).catch(console.error);
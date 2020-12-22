const politicalTableData = {
  rows: [
    {
      black: 566,
      dem: 9401,
      female: 4927,
      hispanic: 393,
      male: 4576,
      other_party: 1705,
      other_race: 650,
      rep: 1402,
      the_geom: null,
      the_geom_webmercator: null,
      total: 12508,
      unknown_sex: 3005,
      ward: "WD01",
      white: 4446,
    },
    {
      black: 1441,
      dem: 14247,
      female: 7657,
      hispanic: 370,
      male: 6899,
      other_party: 2891,
      other_race: 719,
      rep: 2209,
      the_geom: null,
      the_geom_webmercator: null,
      total: 19347,
      unknown_sex: 4791,
      ward: "WD02",
      white: 5590,
    },
    {
      black: 8236,
      dem: 12191,
      female: 5601,
      hispanic: 88,
      male: 3946,
      other_party: 876,
      other_race: 273,
      rep: 339,
      the_geom: null,
      the_geom_webmercator: null,
      total: 13406,
      unknown_sex: 3859,
      ward: "WD03",
      white: 88,
    },
  ],
  time: 0,
  fields: {},
  total_rows: 3,
};

$(document).ready(function() {
  let html = '';
  
  // Local Data setup
  // html = populateTable(politicalTableData.rows);
  // $('#displayTableBody').append(html);

  // AJAX Data setup
  $.get('https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id', function (data) {
    html = populateTable(data.rows);
    $('#displayTableBody').append(html);
  });

});

function populateTable(tableData) {
  let tableHTML = '';
  for(const item of tableData) {
    console.log(item);
    tableHTML += `
    <tr>
      <td>${item.ward}</td>
      <td>${item.dem}</td>
      <td>${item.rep}</td>
      <td>${item.other_party}</td>
      <td>${item.total}</td>
    </tr>`;
  }
  return tableHTML;
}
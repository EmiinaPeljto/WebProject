var teamMemberService = {
  reload_members_datatable: function () {
    RestClient.get("get_team_members", function (data) {
      console.log("Team members data: ", data);
    });
  },
};

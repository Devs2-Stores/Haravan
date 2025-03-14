window.F1Search || (window.F1Search = {});

F1Search.SearchOperators = {
  OR: "||",
  AND: "&&",
};

F1Search.SearchField = (function () {
  function SearchField(name) {
    this.name = name;
    this.values = [];
  }

  SearchField.prototype.addValue = function (value, operator) {
    this.values.push({ value: value, operator: operator });
  };
  SearchField.prototype.deleteValue = function (value, operator) {
    var index = -1;

    for (var i = 0; i < this.values.length; i++) {
      if (
        this.values[i].value === value &&
        this.values[i].operator === operator
      )
        index = i;
    }

    if (index > -1) this.values.splice(index, 1);
  };
  SearchField.prototype.buildParam = function () {
    var value = "";

    for (var i = 0; i < this.values.length; i++) {
      if (i == 0) {
        value += this.values[i].value;
      } else {
        value += this._buildValue(this.values[i]);
      }
    }

    if (this.values.length > 1) {
      value = "(" + value + ")";
    }

    if (value !== "") return this.name + ":" + value;

    return null;
  };
  SearchField.prototype._buildValue = function (value) {
    switch (value.operator.toUpperCase()) {
      case F1Search.SearchOperators.OR:
        return "||" + value.value;
      case F1Search.SearchOperators.AND:
        return "&&" + value.value;
      default:
        return " " + value.value;
    }
  };

  SearchField.name = "SearchField";
  return SearchField;
})();

F1Search.SearchFilter = (function () {
  function SearchFilter() {
    this.fields = {};
  }

  SearchFilter.prototype.addValue = function (group, field, value, operator) {
    var searchField = this.findOrCreateField(group, field);

    return searchField.addValue(value, operator);
  };

  SearchFilter.prototype.findOrCreateField = function (group, field) {
    var searchField = this.fields[group];
    if (!searchField) {
      searchField = new F1Search.SearchField(field);
      this.fields[group] = searchField;
    }

    return searchField;
  };

  SearchFilter.prototype.deleteValue = function (
    group,
    field,
    value,
    operator
  ) {
    var searchField = this.findOrCreateField(group, field);

    return searchField.deleteValue(value, operator);
  };

  SearchFilter.prototype.deleteGroup = function (group) {
    delete this.fields[group];
  };

  SearchFilter.prototype.search = function (settings) {
    if (!settings) settings = {};

    var url = this.buildSearchUrl(settings);

    if (settings.success) this._search(url, settings.success);
  };

  SearchFilter.prototype.buildSearchUrl = function (settings) {
    if (!settings) settings = {};

    var url = this._buildSearchUrl();

    if (settings.view) url += "&view=" + settings.view;
    if (settings.page) url += "&page=" + settings.page;
    if (settings.sortby) url += "&sortby=" + settings.sortby;

    return url;
  };

  SearchFilter.prototype._buildSearchUrl = function () {
    var url = "/search?q=";

    var params = "";
    for (group in this.fields) {
      var param = this.fields[group].buildParam();
      if (param) params += param + "&&";
    }

    if (params.length > 5) params = params.slice(0, -5);

    url += params;

    return url;
  };

  SearchFilter.prototype._search = function (url, callback) {
    $.ajax({
      url: url,
      dataType: "html",
      success: function (html) {
        if (callback) callback(html);
      },
    });
  };

  SearchFilter.containsOperator = function (value) {
    if (value.indexOf(F1Search.SearchOperators.OR) > 0) return true;

    if (value.indexOf(F1Search.SearchOperators.AND) > 0) return true;

    return false;
  };

  SearchFilter.name = "SearchFilter";
  return SearchFilter;
})();

function openPage(n) {
    var savedViewsValue = localStorage.getItem('savedViewsValue') || 0;

    var currentViewsValue = parseInt(savedViewsValue);

    var newViewsValue = abbreviateNumber(currentViewsValue) + n;

    localStorage.setItem('savedViewsValue', newViewsValue);
    
    console.info("Fun fact: you opened this page ", newViewsValue, " times in total");
}

function abbreviateNumber(value) {
    let abbreviatedValue = value;
    const letters = ["", "K", "M", "B","T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "De", "UDe", "DDe", "TDe", "QdDe", "QnDe", "SxDe", "SpDe", "OcDe", "NoDe", "Vg", "UVg", "DVg", "TVg", "QdVg", "QnVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg", "UTg", "DTg", "TTg", "QdTg", "QnTg", "SxTg", "SpTg", "OcTg", "NoTg"];
    let notation = 0;
    
    while (abbreviatedValue >= 1000) {
        abbreviatedValue /= 1000;
        notation++;
  }

    abbreviatedValue = abbreviatedValue.toPrecision(3);

    abbreviatedValue += letters[notation];
    return abbreviatedValue;
}

console.log("Warning: please use this console at your risk");

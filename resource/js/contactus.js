function sendEnquiry(){

    const templateId = "template_23rrysf";
    const serviceId = "service_8bbpu2b";

    var params = {
      name : document.getElementsByTagName('input')[1].value,
      email : document.getElementsByTagName("input")[2].value,
      phone : document.getElementsByTagName("input")[3].value,
      message : document.getElementsByTagName("textarea")[0].value,
    };

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.getElementsByTagName('input')[1].value;
            document.getElementsByTagName('input')[2].value;
            document.getElementsByTagName('input')[3].value;
            document.getElementsByTagName('textarea')[0].value
            console.log(res, "message sent");
            alert('message sent successfully');
        }
    ).catch((err) => console.log(err))
}
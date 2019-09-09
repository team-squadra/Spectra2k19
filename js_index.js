firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      document.getElementById("user_name").innerHTML = email_id;
      document.getElementById('login_div').style.display = 'none'
      document.getElementById('Home_div').style.display = 'block'
    }
  } else {
    // No user is signed in.
    document.getElementById('login_div').style.display = 'block'
    document.getElementById('Home_div').style.display = 'none'
  }
});


function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}


function logout() {
  firebase.auth().signOut();
}

function searchHalls() {
  alert("adasdaswd");
}


// Get the modal
var modal = document.getElementById('Sell_a_ticket');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function Sell_a_ticket() {
  var buyer_ticket_no = document.getElementById("ticket_no").value;
  var buyer_nsbm_id = document.getElementById("nsbm_id").value;
  var buyer_name = document.getElementById("name").value;

  if (buyer_ticket_no == '' || buyer_nsbm_id == '' || buyer_name == '') {
    alert("Values cannot be null");
  }
  else {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("tickets").child(buyer_ticket_no).child("nsbm_id").set(buyer_nsbm_id);
    firebaseRef.child("tickets").child(buyer_ticket_no).child("name").set(buyer_name);
    document.getElementById("ticket_no").value = "";
    document.getElementById("nsbm_id").value = "";
    document.getElementById("name").value = "";

  }

}

var nsbm_id_val = [];
nsbm_id_val[0] = "null";
var name_val = [];
name_val[0] = "null";

for (let index = 0; index < 151; index++) {
  find_buyer_nsbm_id(index);
  find_buyer_name(index);
}


function find_buyer_nsbm_id(val) {

  const nsbm_id = firebase.database().ref().child("tickets").child(val).child("nsbm_id");
  nsbm_id.on('value', snap => {
    const nsbm_id = JSON.stringify(snap.val());
    nsbm_id_val[val] = nsbm_id;
    jj();

  });
}

function find_buyer_name(val) {

  const name = firebase.database().ref().child("tickets").child(val).child("name");
  name.on('value', snap => {
    const name = JSON.stringify(snap.val());
    name_val[val] = name;
    jj();

  });
}

var fixed_ticket_id_val = [];
fixed_ticket_id_val[0] = "null";
var fixed_nsbm_id_val = [];
fixed_nsbm_id_val[0] = "null";
var fixed_name_val = [];
fixed_name_val[0] = "null";




function jj() {

  var x = 1;
  for (var i = 0; i < 151; i++) {

    if (nsbm_id_val[i] != "null" && name_val[i] != "null") {
      fixed_ticket_id_val[x] = i;
      fixed_name_val[x] = name_val[i];
      fixed_nsbm_id_val[x] = nsbm_id_val[i];
      x++;

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      document.getElementById("t_id_1").innerHTML = fixed_ticket_id_val[1];
      document.getElementById("t_o_id_1").innerHTML = fixed_nsbm_id_val[1];
      document.getElementById("t_o_n_1").innerHTML = fixed_name_val[1];

      document.getElementById("t_id_2").innerHTML = fixed_ticket_id_val[2];
      document.getElementById("t_o_id_2").innerHTML = fixed_nsbm_id_val[2];
      document.getElementById("t_o_n_2").innerHTML = fixed_name_val[2];

      document.getElementById("t_id_3").innerHTML = fixed_ticket_id_val[3];
      document.getElementById("t_o_id_3").innerHTML = fixed_nsbm_id_val[3];
      document.getElementById("t_o_n_3").innerHTML = fixed_name_val[3];

      document.getElementById("t_id_4").innerHTML = fixed_ticket_id_val[4];
      document.getElementById("t_o_id_4").innerHTML = fixed_nsbm_id_val[4];
      document.getElementById("t_o_n_4").innerHTML = fixed_name_val[4];

      document.getElementById("t_id_5").innerHTML = fixed_ticket_id_val[5];
      document.getElementById("t_o_id_5").innerHTML = fixed_nsbm_id_val[5];
      document.getElementById("t_o_n_5").innerHTML = fixed_name_val[5];

      document.getElementById("t_id_6").innerHTML = fixed_ticket_id_val[6];
      document.getElementById("t_o_id_6").innerHTML = fixed_nsbm_id_val[6];
      document.getElementById("t_o_n_6").innerHTML = fixed_name_val[6];

      document.getElementById("t_id_7").innerHTML = fixed_ticket_id_val[7];
      document.getElementById("t_o_id_7").innerHTML = fixed_nsbm_id_val[7];
      document.getElementById("t_o_n_7").innerHTML = fixed_name_val[7];

      document.getElementById("t_id_8").innerHTML = fixed_ticket_id_val[8];
      document.getElementById("t_o_id_8").innerHTML = fixed_nsbm_id_val[8];
      document.getElementById("t_o_n_8").innerHTML = fixed_name_val[8];

      document.getElementById("t_id_9").innerHTML = fixed_ticket_id_val[9];
      document.getElementById("t_o_id_9").innerHTML = fixed_nsbm_id_val[9];
      document.getElementById("t_o_n_9").innerHTML = fixed_name_val[9];

      document.getElementById("t_id_10").innerHTML = fixed_ticket_id_val[10];
      document.getElementById("t_o_id_10").innerHTML = fixed_nsbm_id_val[10];
      document.getElementById("t_o_n_10").innerHTML = fixed_name_val[10];

      document.getElementById("t_id_11").innerHTML = fixed_ticket_id_val[11];
      document.getElementById("t_o_id_11").innerHTML = fixed_nsbm_id_val[11];
      document.getElementById("t_o_n_11").innerHTML = fixed_name_val[11];

      document.getElementById("t_id_12").innerHTML = fixed_ticket_id_val[12];
      document.getElementById("t_o_id_12").innerHTML = fixed_nsbm_id_val[12];
      document.getElementById("t_o_n_12").innerHTML = fixed_name_val[12];

      document.getElementById("t_id_13").innerHTML = fixed_ticket_id_val[13];
      document.getElementById("t_o_id_13").innerHTML = fixed_nsbm_id_val[13];
      document.getElementById("t_o_n_13").innerHTML = fixed_name_val[13];

      document.getElementById("t_id_14").innerHTML = fixed_ticket_id_val[14];
      document.getElementById("t_o_id_14").innerHTML = fixed_nsbm_id_val[14];
      document.getElementById("t_o_n_14").innerHTML = fixed_name_val[14];

      document.getElementById("t_id_15").innerHTML = fixed_ticket_id_val[15];
      document.getElementById("t_o_id_15").innerHTML = fixed_nsbm_id_val[15];
      document.getElementById("t_o_n_15").innerHTML = fixed_name_val[15];

      document.getElementById("t_id_16").innerHTML = fixed_ticket_id_val[16];
      document.getElementById("t_o_id_16").innerHTML = fixed_nsbm_id_val[16];
      document.getElementById("t_o_n_16").innerHTML = fixed_name_val[16];

      document.getElementById("t_id_17").innerHTML = fixed_ticket_id_val[17];
      document.getElementById("t_o_id_17").innerHTML = fixed_nsbm_id_val[17];
      document.getElementById("t_o_n_17").innerHTML = fixed_name_val[17];

      document.getElementById("t_id_18").innerHTML = fixed_ticket_id_val[18];
      document.getElementById("t_o_id_18").innerHTML = fixed_nsbm_id_val[18];
      document.getElementById("t_o_n_18").innerHTML = fixed_name_val[18];

      document.getElementById("t_id_19").innerHTML = fixed_ticket_id_val[19];
      document.getElementById("t_o_id_19").innerHTML = fixed_nsbm_id_val[19];
      document.getElementById("t_o_n_19").innerHTML = fixed_name_val[19];

      document.getElementById("t_id_20").innerHTML = fixed_ticket_id_val[20];
      document.getElementById("t_o_id_20").innerHTML = fixed_nsbm_id_val[20];
      document.getElementById("t_o_n_20").innerHTML = fixed_name_val[20];

      document.getElementById("t_id_21").innerHTML = fixed_ticket_id_val[21];
      document.getElementById("t_o_id_21").innerHTML = fixed_nsbm_id_val[21];
      document.getElementById("t_o_n_21").innerHTML = fixed_name_val[21];

      document.getElementById("t_id_22").innerHTML = fixed_ticket_id_val[22];
      document.getElementById("t_o_id_22").innerHTML = fixed_nsbm_id_val[22];
      document.getElementById("t_o_n_22").innerHTML = fixed_name_val[22];

      document.getElementById("t_id_23").innerHTML = fixed_ticket_id_val[23];
      document.getElementById("t_o_id_23").innerHTML = fixed_nsbm_id_val[23];
      document.getElementById("t_o_n_23").innerHTML = fixed_name_val[23];

      document.getElementById("t_id_24").innerHTML = fixed_ticket_id_val[24];
      document.getElementById("t_o_id_24").innerHTML = fixed_nsbm_id_val[24];
      document.getElementById("t_o_n_24").innerHTML = fixed_name_val[24];

      document.getElementById("t_id_25").innerHTML = fixed_ticket_id_val[25];
      document.getElementById("t_o_id_25").innerHTML = fixed_nsbm_id_val[25];
      document.getElementById("t_o_n_25").innerHTML = fixed_name_val[25];

      document.getElementById("t_id_26").innerHTML = fixed_ticket_id_val[26];
      document.getElementById("t_o_id_26").innerHTML = fixed_nsbm_id_val[26];
      document.getElementById("t_o_n_26").innerHTML = fixed_name_val[26];

      document.getElementById("t_id_27").innerHTML = fixed_ticket_id_val[27];
      document.getElementById("t_o_id_27").innerHTML = fixed_nsbm_id_val[27];
      document.getElementById("t_o_n_27").innerHTML = fixed_name_val[27];

      document.getElementById("t_id_28").innerHTML = fixed_ticket_id_val[28];
      document.getElementById("t_o_id_28").innerHTML = fixed_nsbm_id_val[28];
      document.getElementById("t_o_n_28").innerHTML = fixed_name_val[28];

      document.getElementById("t_id_29").innerHTML = fixed_ticket_id_val[29];
      document.getElementById("t_o_id_29").innerHTML = fixed_nsbm_id_val[29];
      document.getElementById("t_o_n_29").innerHTML = fixed_name_val[29];

      document.getElementById("t_id_30").innerHTML = fixed_ticket_id_val[30];
      document.getElementById("t_o_id_30").innerHTML = fixed_nsbm_id_val[30];
      document.getElementById("t_o_n_30").innerHTML = fixed_name_val[30];

      document.getElementById("t_id_31").innerHTML = fixed_ticket_id_val[31];
      document.getElementById("t_o_id_31").innerHTML = fixed_nsbm_id_val[31];
      document.getElementById("t_o_n_31").innerHTML = fixed_name_val[31];

      document.getElementById("t_id_32").innerHTML = fixed_ticket_id_val[32];
      document.getElementById("t_o_id_32").innerHTML = fixed_nsbm_id_val[32];
      document.getElementById("t_o_n_32").innerHTML = fixed_name_val[32];

      document.getElementById("t_id_33").innerHTML = fixed_ticket_id_val[33];
      document.getElementById("t_o_id_33").innerHTML = fixed_nsbm_id_val[33];
      document.getElementById("t_o_n_33").innerHTML = fixed_name_val[33];

      document.getElementById("t_id_34").innerHTML = fixed_ticket_id_val[34];
      document.getElementById("t_o_id_34").innerHTML = fixed_nsbm_id_val[34];
      document.getElementById("t_o_n_34").innerHTML = fixed_name_val[34];

      document.getElementById("t_id_35").innerHTML = fixed_ticket_id_val[35];
      document.getElementById("t_o_id_35").innerHTML = fixed_nsbm_id_val[35];
      document.getElementById("t_o_n_35").innerHTML = fixed_name_val[35];

      document.getElementById("t_id_36").innerHTML = fixed_ticket_id_val[36];
      document.getElementById("t_o_id_36").innerHTML = fixed_nsbm_id_val[36];
      document.getElementById("t_o_n_36").innerHTML = fixed_name_val[36];

      document.getElementById("t_id_37").innerHTML = fixed_ticket_id_val[37];
      document.getElementById("t_o_id_37").innerHTML = fixed_nsbm_id_val[37];
      document.getElementById("t_o_n_37").innerHTML = fixed_name_val[37];

      document.getElementById("t_id_38").innerHTML = fixed_ticket_id_val[38];
      document.getElementById("t_o_id_38").innerHTML = fixed_nsbm_id_val[38];
      document.getElementById("t_o_n_38").innerHTML = fixed_name_val[38];

      document.getElementById("t_id_39").innerHTML = fixed_ticket_id_val[39];
      document.getElementById("t_o_id_39").innerHTML = fixed_nsbm_id_val[39];
      document.getElementById("t_o_n_39").innerHTML = fixed_name_val[39];

      document.getElementById("t_id_40").innerHTML = fixed_ticket_id_val[40];
      document.getElementById("t_o_id_40").innerHTML = fixed_nsbm_id_val[40];
      document.getElementById("t_o_n_40").innerHTML = fixed_name_val[40];

      document.getElementById("t_id_41").innerHTML = fixed_ticket_id_val[41];
      document.getElementById("t_o_id_41").innerHTML = fixed_nsbm_id_val[41];
      document.getElementById("t_o_n_41").innerHTML = fixed_name_val[41];

      document.getElementById("t_id_42").innerHTML = fixed_ticket_id_val[42];
      document.getElementById("t_o_id_42").innerHTML = fixed_nsbm_id_val[42];
      document.getElementById("t_o_n_42").innerHTML = fixed_name_val[42];

      document.getElementById("t_id_43").innerHTML = fixed_ticket_id_val[43];
      document.getElementById("t_o_id_43").innerHTML = fixed_nsbm_id_val[43];
      document.getElementById("t_o_n_43").innerHTML = fixed_name_val[43];

      document.getElementById("t_id_44").innerHTML = fixed_ticket_id_val[44];
      document.getElementById("t_o_id_44").innerHTML = fixed_nsbm_id_val[44];
      document.getElementById("t_o_n_44").innerHTML = fixed_name_val[44];

      document.getElementById("t_id_45").innerHTML = fixed_ticket_id_val[45];
      document.getElementById("t_o_id_45").innerHTML = fixed_nsbm_id_val[45];
      document.getElementById("t_o_n_45").innerHTML = fixed_name_val[45];

      document.getElementById("t_id_46").innerHTML = fixed_ticket_id_val[46];
      document.getElementById("t_o_id_46").innerHTML = fixed_nsbm_id_val[46];
      document.getElementById("t_o_n_46").innerHTML = fixed_name_val[46];

      document.getElementById("t_id_47").innerHTML = fixed_ticket_id_val[47];
      document.getElementById("t_o_id_47").innerHTML = fixed_nsbm_id_val[47];
      document.getElementById("t_o_n_47").innerHTML = fixed_name_val[47];

      document.getElementById("t_id_48").innerHTML = fixed_ticket_id_val[48];
      document.getElementById("t_o_id_48").innerHTML = fixed_nsbm_id_val[48];
      document.getElementById("t_o_n_48").innerHTML = fixed_name_val[48];

      document.getElementById("t_id_49").innerHTML = fixed_ticket_id_val[49];
      document.getElementById("t_o_id_49").innerHTML = fixed_nsbm_id_val[49];
      document.getElementById("t_o_n_49").innerHTML = fixed_name_val[49];

      document.getElementById("t_id_50").innerHTML = fixed_ticket_id_val[50];
      document.getElementById("t_o_id_50").innerHTML = fixed_nsbm_id_val[50];
      document.getElementById("t_o_n_50").innerHTML = fixed_name_val[50];

      document.getElementById("t_id_51").innerHTML = fixed_ticket_id_val[51];
      document.getElementById("t_o_id_51").innerHTML = fixed_nsbm_id_val[51];
      document.getElementById("t_o_n_51").innerHTML = fixed_name_val[51];

      document.getElementById("t_id_52").innerHTML = fixed_ticket_id_val[52];
      document.getElementById("t_o_id_52").innerHTML = fixed_nsbm_id_val[52];
      document.getElementById("t_o_n_52").innerHTML = fixed_name_val[52];

      document.getElementById("t_id_53").innerHTML = fixed_ticket_id_val[53];
      document.getElementById("t_o_id_53").innerHTML = fixed_nsbm_id_val[53];
      document.getElementById("t_o_n_53").innerHTML = fixed_name_val[53];

      document.getElementById("t_id_54").innerHTML = fixed_ticket_id_val[54];
      document.getElementById("t_o_id_54").innerHTML = fixed_nsbm_id_val[54];
      document.getElementById("t_o_n_54").innerHTML = fixed_name_val[54];

      document.getElementById("t_id_55").innerHTML = fixed_ticket_id_val[55];
      document.getElementById("t_o_id_55").innerHTML = fixed_nsbm_id_val[55];
      document.getElementById("t_o_n_55").innerHTML = fixed_name_val[55];

      document.getElementById("t_id_56").innerHTML = fixed_ticket_id_val[56];
      document.getElementById("t_o_id_56").innerHTML = fixed_nsbm_id_val[56];
      document.getElementById("t_o_n_56").innerHTML = fixed_name_val[56];

      document.getElementById("t_id_57").innerHTML = fixed_ticket_id_val[57];
      document.getElementById("t_o_id_57").innerHTML = fixed_nsbm_id_val[57];
      document.getElementById("t_o_n_57").innerHTML = fixed_name_val[57];

      document.getElementById("t_id_58").innerHTML = fixed_ticket_id_val[58];
      document.getElementById("t_o_id_58").innerHTML = fixed_nsbm_id_val[58];
      document.getElementById("t_o_n_58").innerHTML = fixed_name_val[58];

      document.getElementById("t_id_59").innerHTML = fixed_ticket_id_val[59];
      document.getElementById("t_o_id_59").innerHTML = fixed_nsbm_id_val[59];
      document.getElementById("t_o_n_59").innerHTML = fixed_name_val[59];

      document.getElementById("t_id_60").innerHTML = fixed_ticket_id_val[60];
      document.getElementById("t_o_id_60").innerHTML = fixed_nsbm_id_val[60];
      document.getElementById("t_o_n_60").innerHTML = fixed_name_val[60];

      document.getElementById("t_id_61").innerHTML = fixed_ticket_id_val[61];
      document.getElementById("t_o_id_61").innerHTML = fixed_nsbm_id_val[61];
      document.getElementById("t_o_n_61").innerHTML = fixed_name_val[61];

      document.getElementById("t_id_62").innerHTML = fixed_ticket_id_val[62];
      document.getElementById("t_o_id_62").innerHTML = fixed_nsbm_id_val[62];
      document.getElementById("t_o_n_62").innerHTML = fixed_name_val[62];

      document.getElementById("t_id_63").innerHTML = fixed_ticket_id_val[63];
      document.getElementById("t_o_id_63").innerHTML = fixed_nsbm_id_val[63];
      document.getElementById("t_o_n_63").innerHTML = fixed_name_val[63];

      document.getElementById("t_id_64").innerHTML = fixed_ticket_id_val[64];
      document.getElementById("t_o_id_64").innerHTML = fixed_nsbm_id_val[64];
      document.getElementById("t_o_n_64").innerHTML = fixed_name_val[64];

      document.getElementById("t_id_65").innerHTML = fixed_ticket_id_val[65];
      document.getElementById("t_o_id_65").innerHTML = fixed_nsbm_id_val[65];
      document.getElementById("t_o_n_65").innerHTML = fixed_name_val[65];

      document.getElementById("t_id_66").innerHTML = fixed_ticket_id_val[66];
      document.getElementById("t_o_id_66").innerHTML = fixed_nsbm_id_val[66];
      document.getElementById("t_o_n_66").innerHTML = fixed_name_val[66];

      document.getElementById("t_id_67").innerHTML = fixed_ticket_id_val[67];
      document.getElementById("t_o_id_67").innerHTML = fixed_nsbm_id_val[67];
      document.getElementById("t_o_n_67").innerHTML = fixed_name_val[67];

      document.getElementById("t_id_68").innerHTML = fixed_ticket_id_val[68];
      document.getElementById("t_o_id_68").innerHTML = fixed_nsbm_id_val[68];
      document.getElementById("t_o_n_68").innerHTML = fixed_name_val[68];

      document.getElementById("t_id_69").innerHTML = fixed_ticket_id_val[69];
      document.getElementById("t_o_id_69").innerHTML = fixed_nsbm_id_val[69];
      document.getElementById("t_o_n_69").innerHTML = fixed_name_val[69];

      document.getElementById("t_id_70").innerHTML = fixed_ticket_id_val[70];
      document.getElementById("t_o_id_70").innerHTML = fixed_nsbm_id_val[70];
      document.getElementById("t_o_n_70").innerHTML = fixed_name_val[70];

      document.getElementById("t_id_71").innerHTML = fixed_ticket_id_val[71];
      document.getElementById("t_o_id_71").innerHTML = fixed_nsbm_id_val[71];
      document.getElementById("t_o_n_71").innerHTML = fixed_name_val[71];

      document.getElementById("t_id_72").innerHTML = fixed_ticket_id_val[72];
      document.getElementById("t_o_id_72").innerHTML = fixed_nsbm_id_val[72];
      document.getElementById("t_o_n_72").innerHTML = fixed_name_val[72];

      document.getElementById("t_id_73").innerHTML = fixed_ticket_id_val[73];
      document.getElementById("t_o_id_73").innerHTML = fixed_nsbm_id_val[73];
      document.getElementById("t_o_n_73").innerHTML = fixed_name_val[73];

      document.getElementById("t_id_74").innerHTML = fixed_ticket_id_val[74];
      document.getElementById("t_o_id_74").innerHTML = fixed_nsbm_id_val[74];
      document.getElementById("t_o_n_74").innerHTML = fixed_name_val[74];

      document.getElementById("t_id_75").innerHTML = fixed_ticket_id_val[75];
      document.getElementById("t_o_id_75").innerHTML = fixed_nsbm_id_val[75];
      document.getElementById("t_o_n_75").innerHTML = fixed_name_val[75];

      document.getElementById("t_id_76").innerHTML = fixed_ticket_id_val[76];
      document.getElementById("t_o_id_76").innerHTML = fixed_nsbm_id_val[76];
      document.getElementById("t_o_n_76").innerHTML = fixed_name_val[76];

      document.getElementById("t_id_77").innerHTML = fixed_ticket_id_val[77];
      document.getElementById("t_o_id_77").innerHTML = fixed_nsbm_id_val[77];
      document.getElementById("t_o_n_77").innerHTML = fixed_name_val[77];

      document.getElementById("t_id_78").innerHTML = fixed_ticket_id_val[78];
      document.getElementById("t_o_id_78").innerHTML = fixed_nsbm_id_val[78];
      document.getElementById("t_o_n_78").innerHTML = fixed_name_val[78];

      document.getElementById("t_id_79").innerHTML = fixed_ticket_id_val[79];
      document.getElementById("t_o_id_79").innerHTML = fixed_nsbm_id_val[79];
      document.getElementById("t_o_n_79").innerHTML = fixed_name_val[79];

      document.getElementById("t_id_80").innerHTML = fixed_ticket_id_val[80];
      document.getElementById("t_o_id_80").innerHTML = fixed_nsbm_id_val[80];
      document.getElementById("t_o_n_80").innerHTML = fixed_name_val[80];

      document.getElementById("t_id_81").innerHTML = fixed_ticket_id_val[81];
      document.getElementById("t_o_id_81").innerHTML = fixed_nsbm_id_val[81];
      document.getElementById("t_o_n_81").innerHTML = fixed_name_val[81];

      document.getElementById("t_id_82").innerHTML = fixed_ticket_id_val[82];
      document.getElementById("t_o_id_82").innerHTML = fixed_nsbm_id_val[82];
      document.getElementById("t_o_n_82").innerHTML = fixed_name_val[82];

      document.getElementById("t_id_83").innerHTML = fixed_ticket_id_val[83];
      document.getElementById("t_o_id_83").innerHTML = fixed_nsbm_id_val[83];
      document.getElementById("t_o_n_83").innerHTML = fixed_name_val[83];

      document.getElementById("t_id_84").innerHTML = fixed_ticket_id_val[84];
      document.getElementById("t_o_id_84").innerHTML = fixed_nsbm_id_val[84];
      document.getElementById("t_o_n_84").innerHTML = fixed_name_val[84];

      document.getElementById("t_id_85").innerHTML = fixed_ticket_id_val[85];
      document.getElementById("t_o_id_85").innerHTML = fixed_nsbm_id_val[85];
      document.getElementById("t_o_n_85").innerHTML = fixed_name_val[85];

      document.getElementById("t_id_86").innerHTML = fixed_ticket_id_val[86];
      document.getElementById("t_o_id_86").innerHTML = fixed_nsbm_id_val[86];
      document.getElementById("t_o_n_86").innerHTML = fixed_name_val[86];

      document.getElementById("t_id_87").innerHTML = fixed_ticket_id_val[87];
      document.getElementById("t_o_id_87").innerHTML = fixed_nsbm_id_val[87];
      document.getElementById("t_o_n_87").innerHTML = fixed_name_val[87];

      document.getElementById("t_id_88").innerHTML = fixed_ticket_id_val[88];
      document.getElementById("t_o_id_88").innerHTML = fixed_nsbm_id_val[88];
      document.getElementById("t_o_n_88").innerHTML = fixed_name_val[88];

      document.getElementById("t_id_89").innerHTML = fixed_ticket_id_val[89];
      document.getElementById("t_o_id_89").innerHTML = fixed_nsbm_id_val[89];
      document.getElementById("t_o_n_89").innerHTML = fixed_name_val[89];

      document.getElementById("t_id_90").innerHTML = fixed_ticket_id_val[90];
      document.getElementById("t_o_id_90").innerHTML = fixed_nsbm_id_val[90];
      document.getElementById("t_o_n_90").innerHTML = fixed_name_val[90];

      document.getElementById("t_id_91").innerHTML = fixed_ticket_id_val[91];
      document.getElementById("t_o_id_91").innerHTML = fixed_nsbm_id_val[91];
      document.getElementById("t_o_n_91").innerHTML = fixed_name_val[91];

      document.getElementById("t_id_92").innerHTML = fixed_ticket_id_val[92];
      document.getElementById("t_o_id_92").innerHTML = fixed_nsbm_id_val[92];
      document.getElementById("t_o_n_92").innerHTML = fixed_name_val[92];

      document.getElementById("t_id_93").innerHTML = fixed_ticket_id_val[93];
      document.getElementById("t_o_id_93").innerHTML = fixed_nsbm_id_val[93];
      document.getElementById("t_o_n_93").innerHTML = fixed_name_val[93];

      document.getElementById("t_id_94").innerHTML = fixed_ticket_id_val[94];
      document.getElementById("t_o_id_94").innerHTML = fixed_nsbm_id_val[94];
      document.getElementById("t_o_n_94").innerHTML = fixed_name_val[94];

      document.getElementById("t_id_95").innerHTML = fixed_ticket_id_val[95];
      document.getElementById("t_o_id_95").innerHTML = fixed_nsbm_id_val[95];
      document.getElementById("t_o_n_95").innerHTML = fixed_name_val[95];

      document.getElementById("t_id_96").innerHTML = fixed_ticket_id_val[96];
      document.getElementById("t_o_id_96").innerHTML = fixed_nsbm_id_val[96];
      document.getElementById("t_o_n_96").innerHTML = fixed_name_val[96];

      document.getElementById("t_id_97").innerHTML = fixed_ticket_id_val[97];
      document.getElementById("t_o_id_97").innerHTML = fixed_nsbm_id_val[97];
      document.getElementById("t_o_n_97").innerHTML = fixed_name_val[97];

      document.getElementById("t_id_98").innerHTML = fixed_ticket_id_val[98];
      document.getElementById("t_o_id_98").innerHTML = fixed_nsbm_id_val[98];
      document.getElementById("t_o_n_98").innerHTML = fixed_name_val[98];

      document.getElementById("t_id_99").innerHTML = fixed_ticket_id_val[99];
      document.getElementById("t_o_id_99").innerHTML = fixed_nsbm_id_val[99];
      document.getElementById("t_o_n_99").innerHTML = fixed_name_val[99];

      document.getElementById("t_id_100").innerHTML = fixed_ticket_id_val[100];
      document.getElementById("t_o_id_100").innerHTML = fixed_nsbm_id_val[100];
      document.getElementById("t_o_n_100").innerHTML = fixed_name_val[100];

      document.getElementById("t_id_101").innerHTML = fixed_ticket_id_val[101];
      document.getElementById("t_o_id_101").innerHTML = fixed_nsbm_id_val[101];
      document.getElementById("t_o_n_101").innerHTML = fixed_name_val[101];

      document.getElementById("t_id_102").innerHTML = fixed_ticket_id_val[102];
      document.getElementById("t_o_id_102").innerHTML = fixed_nsbm_id_val[102];
      document.getElementById("t_o_n_102").innerHTML = fixed_name_val[102];

      document.getElementById("t_id_103").innerHTML = fixed_ticket_id_val[103];
      document.getElementById("t_o_id_103").innerHTML = fixed_nsbm_id_val[103];
      document.getElementById("t_o_n_103").innerHTML = fixed_name_val[103];

      document.getElementById("t_id_104").innerHTML = fixed_ticket_id_val[104];
      document.getElementById("t_o_id_104").innerHTML = fixed_nsbm_id_val[104];
      document.getElementById("t_o_n_104").innerHTML = fixed_name_val[104];

      document.getElementById("t_id_105").innerHTML = fixed_ticket_id_val[105];
      document.getElementById("t_o_id_105").innerHTML = fixed_nsbm_id_val[105];
      document.getElementById("t_o_n_105").innerHTML = fixed_name_val[105];

      document.getElementById("t_id_106").innerHTML = fixed_ticket_id_val[106];
      document.getElementById("t_o_id_106").innerHTML = fixed_nsbm_id_val[106];
      document.getElementById("t_o_n_106").innerHTML = fixed_name_val[106];

      document.getElementById("t_id_107").innerHTML = fixed_ticket_id_val[107];
      document.getElementById("t_o_id_107").innerHTML = fixed_nsbm_id_val[107];
      document.getElementById("t_o_n_107").innerHTML = fixed_name_val[107];

      document.getElementById("t_id_108").innerHTML = fixed_ticket_id_val[108];
      document.getElementById("t_o_id_108").innerHTML = fixed_nsbm_id_val[108];
      document.getElementById("t_o_n_108").innerHTML = fixed_name_val[108];

      document.getElementById("t_id_109").innerHTML = fixed_ticket_id_val[109];
      document.getElementById("t_o_id_109").innerHTML = fixed_nsbm_id_val[109];
      document.getElementById("t_o_n_109").innerHTML = fixed_name_val[109];

      document.getElementById("t_id_110").innerHTML = fixed_ticket_id_val[110];
      document.getElementById("t_o_id_110").innerHTML = fixed_nsbm_id_val[110];
      document.getElementById("t_o_n_110").innerHTML = fixed_name_val[110];

      document.getElementById("t_id_111").innerHTML = fixed_ticket_id_val[111];
      document.getElementById("t_o_id_111").innerHTML = fixed_nsbm_id_val[111];
      document.getElementById("t_o_n_111").innerHTML = fixed_name_val[111];

      document.getElementById("t_id_112").innerHTML = fixed_ticket_id_val[112];
      document.getElementById("t_o_id_112").innerHTML = fixed_nsbm_id_val[112];
      document.getElementById("t_o_n_112").innerHTML = fixed_name_val[112];

      document.getElementById("t_id_113").innerHTML = fixed_ticket_id_val[113];
      document.getElementById("t_o_id_113").innerHTML = fixed_nsbm_id_val[113];
      document.getElementById("t_o_n_113").innerHTML = fixed_name_val[113];

      document.getElementById("t_id_114").innerHTML = fixed_ticket_id_val[114];
      document.getElementById("t_o_id_114").innerHTML = fixed_nsbm_id_val[114];
      document.getElementById("t_o_n_114").innerHTML = fixed_name_val[114];

      document.getElementById("t_id_115").innerHTML = fixed_ticket_id_val[115];
      document.getElementById("t_o_id_115").innerHTML = fixed_nsbm_id_val[115];
      document.getElementById("t_o_n_115").innerHTML = fixed_name_val[115];

      document.getElementById("t_id_116").innerHTML = fixed_ticket_id_val[116];
      document.getElementById("t_o_id_116").innerHTML = fixed_nsbm_id_val[116];
      document.getElementById("t_o_n_116").innerHTML = fixed_name_val[116];

      document.getElementById("t_id_117").innerHTML = fixed_ticket_id_val[117];
      document.getElementById("t_o_id_117").innerHTML = fixed_nsbm_id_val[117];
      document.getElementById("t_o_n_117").innerHTML = fixed_name_val[117];

      document.getElementById("t_id_118").innerHTML = fixed_ticket_id_val[118];
      document.getElementById("t_o_id_118").innerHTML = fixed_nsbm_id_val[118];
      document.getElementById("t_o_n_118").innerHTML = fixed_name_val[118];

      document.getElementById("t_id_119").innerHTML = fixed_ticket_id_val[119];
      document.getElementById("t_o_id_119").innerHTML = fixed_nsbm_id_val[119];
      document.getElementById("t_o_n_119").innerHTML = fixed_name_val[119];

      document.getElementById("t_id_120").innerHTML = fixed_ticket_id_val[120];
      document.getElementById("t_o_id_120").innerHTML = fixed_nsbm_id_val[120];
      document.getElementById("t_o_n_120").innerHTML = fixed_name_val[120];

      document.getElementById("t_id_121").innerHTML = fixed_ticket_id_val[121];
      document.getElementById("t_o_id_121").innerHTML = fixed_nsbm_id_val[121];
      document.getElementById("t_o_n_121").innerHTML = fixed_name_val[121];

      document.getElementById("t_id_122").innerHTML = fixed_ticket_id_val[122];
      document.getElementById("t_o_id_122").innerHTML = fixed_nsbm_id_val[122];
      document.getElementById("t_o_n_122").innerHTML = fixed_name_val[122];

      document.getElementById("t_id_123").innerHTML = fixed_ticket_id_val[123];
      document.getElementById("t_o_id_123").innerHTML = fixed_nsbm_id_val[123];
      document.getElementById("t_o_n_123").innerHTML = fixed_name_val[123];

      document.getElementById("t_id_124").innerHTML = fixed_ticket_id_val[124];
      document.getElementById("t_o_id_124").innerHTML = fixed_nsbm_id_val[124];
      document.getElementById("t_o_n_124").innerHTML = fixed_name_val[124];

      document.getElementById("t_id_125").innerHTML = fixed_ticket_id_val[125];
      document.getElementById("t_o_id_125").innerHTML = fixed_nsbm_id_val[125];
      document.getElementById("t_o_n_125").innerHTML = fixed_name_val[125];

      document.getElementById("t_id_126").innerHTML = fixed_ticket_id_val[126];
      document.getElementById("t_o_id_126").innerHTML = fixed_nsbm_id_val[126];
      document.getElementById("t_o_n_126").innerHTML = fixed_name_val[126];

      document.getElementById("t_id_127").innerHTML = fixed_ticket_id_val[127];
      document.getElementById("t_o_id_127").innerHTML = fixed_nsbm_id_val[127];
      document.getElementById("t_o_n_127").innerHTML = fixed_name_val[127];

      document.getElementById("t_id_128").innerHTML = fixed_ticket_id_val[128];
      document.getElementById("t_o_id_128").innerHTML = fixed_nsbm_id_val[128];
      document.getElementById("t_o_n_128").innerHTML = fixed_name_val[128];

      document.getElementById("t_id_129").innerHTML = fixed_ticket_id_val[129];
      document.getElementById("t_o_id_129").innerHTML = fixed_nsbm_id_val[129];
      document.getElementById("t_o_n_129").innerHTML = fixed_name_val[129];

      document.getElementById("t_id_130").innerHTML = fixed_ticket_id_val[130];
      document.getElementById("t_o_id_130").innerHTML = fixed_nsbm_id_val[130];
      document.getElementById("t_o_n_130").innerHTML = fixed_name_val[130];

      document.getElementById("t_id_131").innerHTML = fixed_ticket_id_val[131];
      document.getElementById("t_o_id_131").innerHTML = fixed_nsbm_id_val[131];
      document.getElementById("t_o_n_131").innerHTML = fixed_name_val[131];

      document.getElementById("t_id_132").innerHTML = fixed_ticket_id_val[132];
      document.getElementById("t_o_id_132").innerHTML = fixed_nsbm_id_val[132];
      document.getElementById("t_o_n_132").innerHTML = fixed_name_val[132];

      document.getElementById("t_id_133").innerHTML = fixed_ticket_id_val[133];
      document.getElementById("t_o_id_133").innerHTML = fixed_nsbm_id_val[133];
      document.getElementById("t_o_n_133").innerHTML = fixed_name_val[133];

      document.getElementById("t_id_134").innerHTML = fixed_ticket_id_val[134];
      document.getElementById("t_o_id_134").innerHTML = fixed_nsbm_id_val[134];
      document.getElementById("t_o_n_134").innerHTML = fixed_name_val[134];

      document.getElementById("t_id_135").innerHTML = fixed_ticket_id_val[135];
      document.getElementById("t_o_id_135").innerHTML = fixed_nsbm_id_val[135];
      document.getElementById("t_o_n_135").innerHTML = fixed_name_val[135];

      document.getElementById("t_id_136").innerHTML = fixed_ticket_id_val[136];
      document.getElementById("t_o_id_136").innerHTML = fixed_nsbm_id_val[136];
      document.getElementById("t_o_n_136").innerHTML = fixed_name_val[136];

      document.getElementById("t_id_137").innerHTML = fixed_ticket_id_val[137];
      document.getElementById("t_o_id_137").innerHTML = fixed_nsbm_id_val[137];
      document.getElementById("t_o_n_137").innerHTML = fixed_name_val[137];

      document.getElementById("t_id_138").innerHTML = fixed_ticket_id_val[138];
      document.getElementById("t_o_id_138").innerHTML = fixed_nsbm_id_val[138];
      document.getElementById("t_o_n_138").innerHTML = fixed_name_val[138];

      document.getElementById("t_id_139").innerHTML = fixed_ticket_id_val[139];
      document.getElementById("t_o_id_139").innerHTML = fixed_nsbm_id_val[139];
      document.getElementById("t_o_n_139").innerHTML = fixed_name_val[139];

      document.getElementById("t_id_140").innerHTML = fixed_ticket_id_val[140];
      document.getElementById("t_o_id_140").innerHTML = fixed_nsbm_id_val[140];
      document.getElementById("t_o_n_140").innerHTML = fixed_name_val[140];

      document.getElementById("t_id_141").innerHTML = fixed_ticket_id_val[141];
      document.getElementById("t_o_id_141").innerHTML = fixed_nsbm_id_val[141];
      document.getElementById("t_o_n_141").innerHTML = fixed_name_val[141];

      document.getElementById("t_id_142").innerHTML = fixed_ticket_id_val[142];
      document.getElementById("t_o_id_142").innerHTML = fixed_nsbm_id_val[142];
      document.getElementById("t_o_n_142").innerHTML = fixed_name_val[142];

      document.getElementById("t_id_143").innerHTML = fixed_ticket_id_val[143];
      document.getElementById("t_o_id_143").innerHTML = fixed_nsbm_id_val[143];
      document.getElementById("t_o_n_143").innerHTML = fixed_name_val[143];

      document.getElementById("t_id_144").innerHTML = fixed_ticket_id_val[144];
      document.getElementById("t_o_id_144").innerHTML = fixed_nsbm_id_val[144];
      document.getElementById("t_o_n_144").innerHTML = fixed_name_val[144];

      document.getElementById("t_id_145").innerHTML = fixed_ticket_id_val[145];
      document.getElementById("t_o_id_145").innerHTML = fixed_nsbm_id_val[145];
      document.getElementById("t_o_n_145").innerHTML = fixed_name_val[145];

      document.getElementById("t_id_146").innerHTML = fixed_ticket_id_val[146];
      document.getElementById("t_o_id_146").innerHTML = fixed_nsbm_id_val[146];
      document.getElementById("t_o_n_146").innerHTML = fixed_name_val[146];

      document.getElementById("t_id_147").innerHTML = fixed_ticket_id_val[147];
      document.getElementById("t_o_id_147").innerHTML = fixed_nsbm_id_val[147];
      document.getElementById("t_o_n_147").innerHTML = fixed_name_val[147];

      document.getElementById("t_id_148").innerHTML = fixed_ticket_id_val[148];
      document.getElementById("t_o_id_148").innerHTML = fixed_nsbm_id_val[148];
      document.getElementById("t_o_n_148").innerHTML = fixed_name_val[148];

      document.getElementById("t_id_149").innerHTML = fixed_ticket_id_val[149];
      document.getElementById("t_o_id_149").innerHTML = fixed_nsbm_id_val[149];
      document.getElementById("t_o_n_149").innerHTML = fixed_name_val[149];

      document.getElementById("t_id_150").innerHTML = fixed_ticket_id_val[150];
      document.getElementById("t_o_id_150").innerHTML = fixed_nsbm_id_val[150];
      document.getElementById("t_o_n_150").innerHTML = fixed_name_val[150];




      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }
  }
  Arrange_table();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var t_id_array = [];
var t_o_id_array = [];
var t_o_n_array = [];


t_id_array[0] = "null"; t_id_array[1] = "t_id_1"; t_id_array[2] = "t_id_2"; t_id_array[3] = "t_id_3"; t_id_array[4] = "t_id_4"; t_id_array[5] = "t_id_5"; t_id_array[6] = "t_id_6"; t_id_array[7] = "t_id_7"; t_id_array[8] = "t_id_8"; t_id_array[9] = "t_id_9";
t_o_id_array[0] = "null"; t_o_id_array[1] = "t_o_id_1"; t_o_id_array[2] = "t_o_id_2"; t_o_id_array[3] = "t_o_id_3"; t_o_id_array[4] = "t_o_id_4"; t_o_id_array[5] = "t_o_id_5"; t_o_id_array[6] = "t_o_id_6"; t_o_id_array[7] = "t_o_id_7"; t_o_id_array[8] = "t_o_id_8"; t_o_id_array[9] = "t_o_id_9";
t_o_n_array[0] = "null"; t_o_n_array[1] = "t_o_n_1"; t_o_n_array[2] = "t_o_n_2"; t_o_n_array[3] = "t_o_n_3"; t_o_n_array[4] = "t_o_n_4"; t_o_n_array[5] = "t_o_n_5"; t_o_n_array[6] = "t_o_n_6"; t_o_n_array[7] = "t_o_n_7"; t_o_n_array[8] = "t_o_n_8"; t_o_n_array[9] = "t_o_n_9";

t_id_array[10] = "t_id_10"; t_id_array[11] = "t_id_11"; t_id_array[12] = "t_id_12"; t_id_array[13] = "t_id_13"; t_id_array[14] = "t_id_14"; t_id_array[15] = "t_id_15"; t_id_array[16] = "t_id_16"; t_id_array[17] = "t_id_17"; t_id_array[18] = "t_id_18"; t_id_array[19] = "t_id_19";
t_o_id_array[10] = "t_o_id_10"; t_o_id_array[11] = "t_o_id_11"; t_o_id_array[12] = "t_o_id_12"; t_o_id_array[13] = "t_o_id_13"; t_o_id_array[14] = "t_o_id_14"; t_o_id_array[15] = "t_o_id_15"; t_o_id_array[16] = "t_o_id_16"; t_o_id_array[17] = "t_o_id_17"; t_o_id_array[18] = "t_o_id_18"; t_o_id_array[19] = "t_o_id_19";
t_o_n_array[10] = "t_o_n_10"; t_o_n_array[11] = "t_o_n_11"; t_o_n_array[12] = "t_o_n_12"; t_o_n_array[13] = "t_o_n_13"; t_o_n_array[14] = "t_o_n_14"; t_o_n_array[15] = "t_o_n_15"; t_o_n_array[16] = "t_o_n_16"; t_o_n_array[17] = "t_o_n_17"; t_o_n_array[18] = "t_o_n_18"; t_o_n_array[19] = "t_o_n_19";

t_id_array[20] = "t_id_20"; t_id_array[21] = "t_id_21"; t_id_array[22] = "t_id_22"; t_id_array[23] = "t_id_23"; t_id_array[24] = "t_id_24"; t_id_array[25] = "t_id_25"; t_id_array[26] = "t_id_26"; t_id_array[27] = "t_id_27"; t_id_array[28] = "t_id_28"; t_id_array[29] = "t_id_29";
t_o_id_array[20] = "t_o_id_20"; t_o_id_array[21] = "t_o_id_21"; t_o_id_array[22] = "t_o_id_22"; t_o_id_array[23] = "t_o_id_23"; t_o_id_array[24] = "t_o_id_24"; t_o_id_array[25] = "t_o_id_25"; t_o_id_array[26] = "t_o_id_26"; t_o_id_array[27] = "t_o_id_27"; t_o_id_array[28] = "t_o_id_28"; t_o_id_array[29] = "t_o_id_29";
t_o_n_array[20] = "t_o_n_20"; t_o_n_array[21] = "t_o_n_21"; t_o_n_array[22] = "t_o_n_22"; t_o_n_array[23] = "t_o_n_23"; t_o_n_array[24] = "t_o_n_24"; t_o_n_array[25] = "t_o_n_25"; t_o_n_array[26] = "t_o_n_26"; t_o_n_array[27] = "t_o_n_27"; t_o_n_array[28] = "t_o_n_28"; t_o_n_array[29] = "t_o_n_29";

t_id_array[30] = "t_id_30"; t_id_array[31] = "t_id_31"; t_id_array[32] = "t_id_32"; t_id_array[33] = "t_id_33"; t_id_array[34] = "t_id_34"; t_id_array[35] = "t_id_35"; t_id_array[36] = "t_id_36"; t_id_array[37] = "t_id_37"; t_id_array[38] = "t_id_38"; t_id_array[39] = "t_id_39";
t_o_id_array[30] = "t_o_id_30"; t_o_id_array[31] = "t_o_id_31"; t_o_id_array[32] = "t_o_id_32"; t_o_id_array[33] = "t_o_id_33"; t_o_id_array[34] = "t_o_id_34"; t_o_id_array[35] = "t_o_id_35"; t_o_id_array[36] = "t_o_id_36"; t_o_id_array[37] = "t_o_id_37"; t_o_id_array[38] = "t_o_id_38"; t_o_id_array[39] = "t_o_id_39";
t_o_n_array[30] = "t_o_n_30"; t_o_n_array[31] = "t_o_n_31"; t_o_n_array[32] = "t_o_n_32"; t_o_n_array[33] = "t_o_n_33"; t_o_n_array[34] = "t_o_n_34"; t_o_n_array[35] = "t_o_n_35"; t_o_n_array[36] = "t_o_n_36"; t_o_n_array[37] = "t_o_n_37"; t_o_n_array[38] = "t_o_n_38"; t_o_n_array[39] = "t_o_n_39";

t_id_array[40] = "t_id_40"; t_id_array[41] = "t_id_41"; t_id_array[42] = "t_id_42"; t_id_array[43] = "t_id_43"; t_id_array[44] = "t_id_44"; t_id_array[45] = "t_id_45"; t_id_array[46] = "t_id_46"; t_id_array[47] = "t_id_47"; t_id_array[48] = "t_id_48"; t_id_array[49] = "t_id_49";
t_o_id_array[40] = "t_o_id_40"; t_o_id_array[41] = "t_o_id_41"; t_o_id_array[42] = "t_o_id_42"; t_o_id_array[43] = "t_o_id_43"; t_o_id_array[44] = "t_o_id_44"; t_o_id_array[45] = "t_o_id_45"; t_o_id_array[46] = "t_o_id_46"; t_o_id_array[47] = "t_o_id_47"; t_o_id_array[48] = "t_o_id_48"; t_o_id_array[49] = "t_o_id_49";
t_o_n_array[40] = "t_o_n_40"; t_o_n_array[41] = "t_o_n_41"; t_o_n_array[42] = "t_o_n_42"; t_o_n_array[43] = "t_o_n_43"; t_o_n_array[44] = "t_o_n_44"; t_o_n_array[45] = "t_o_n_45"; t_o_n_array[46] = "t_o_n_46"; t_o_n_array[47] = "t_o_n_47"; t_o_n_array[48] = "t_o_n_48"; t_o_n_array[49] = "t_o_n_49";

t_id_array[50] = "t_id_50"; t_id_array[51] = "t_id_51"; t_id_array[52] = "t_id_52"; t_id_array[53] = "t_id_53"; t_id_array[54] = "t_id_54"; t_id_array[55] = "t_id_55"; t_id_array[56] = "t_id_56"; t_id_array[57] = "t_id_57"; t_id_array[58] = "t_id_58"; t_id_array[59] = "t_id_59";
t_o_id_array[50] = "t_o_id_50"; t_o_id_array[51] = "t_o_id_51"; t_o_id_array[52] = "t_o_id_52"; t_o_id_array[53] = "t_o_id_53"; t_o_id_array[54] = "t_o_id_54"; t_o_id_array[55] = "t_o_id_55"; t_o_id_array[56] = "t_o_id_56"; t_o_id_array[57] = "t_o_id_57"; t_o_id_array[58] = "t_o_id_58"; t_o_id_array[59] = "t_o_id_59";
t_o_n_array[50] = "t_o_n_50"; t_o_n_array[51] = "t_o_n_51"; t_o_n_array[52] = "t_o_n_52"; t_o_n_array[53] = "t_o_n_53"; t_o_n_array[54] = "t_o_n_54"; t_o_n_array[55] = "t_o_n_55"; t_o_n_array[56] = "t_o_n_56"; t_o_n_array[57] = "t_o_n_57"; t_o_n_array[58] = "t_o_n_58"; t_o_n_array[59] = "t_o_n_59";

t_id_array[60] = "t_id_60"; t_id_array[61] = "t_id_61"; t_id_array[62] = "t_id_62"; t_id_array[63] = "t_id_63"; t_id_array[64] = "t_id_64"; t_id_array[65] = "t_id_65"; t_id_array[66] = "t_id_66"; t_id_array[67] = "t_id_67"; t_id_array[68] = "t_id_68"; t_id_array[69] = "t_id_69";
t_o_id_array[60] = "t_o_id_60"; t_o_id_array[61] = "t_o_id_61"; t_o_id_array[62] = "t_o_id_62"; t_o_id_array[63] = "t_o_id_63"; t_o_id_array[64] = "t_o_id_64"; t_o_id_array[65] = "t_o_id_65"; t_o_id_array[66] = "t_o_id_66"; t_o_id_array[67] = "t_o_id_67"; t_o_id_array[68] = "t_o_id_68"; t_o_id_array[69] = "t_o_id_69";
t_o_n_array[60] = "t_o_n_60"; t_o_n_array[61] = "t_o_n_61"; t_o_n_array[62] = "t_o_n_62"; t_o_n_array[63] = "t_o_n_63"; t_o_n_array[64] = "t_o_n_64"; t_o_n_array[65] = "t_o_n_65"; t_o_n_array[66] = "t_o_n_66"; t_o_n_array[67] = "t_o_n_67"; t_o_n_array[68] = "t_o_n_68"; t_o_n_array[69] = "t_o_n_69";

t_id_array[70] = "t_id_70"; t_id_array[71] = "t_id_71"; t_id_array[72] = "t_id_72"; t_id_array[73] = "t_id_73"; t_id_array[74] = "t_id_74"; t_id_array[75] = "t_id_75"; t_id_array[76] = "t_id_76"; t_id_array[77] = "t_id_77"; t_id_array[78] = "t_id_78"; t_id_array[79] = "t_id_79";
t_o_id_array[70] = "t_o_id_70"; t_o_id_array[71] = "t_o_id_71"; t_o_id_array[72] = "t_o_id_72"; t_o_id_array[73] = "t_o_id_73"; t_o_id_array[74] = "t_o_id_74"; t_o_id_array[75] = "t_o_id_75"; t_o_id_array[76] = "t_o_id_76"; t_o_id_array[77] = "t_o_id_77"; t_o_id_array[78] = "t_o_id_78"; t_o_id_array[79] = "t_o_id_79";
t_o_n_array[70] = "t_o_n_70"; t_o_n_array[71] = "t_o_n_71"; t_o_n_array[72] = "t_o_n_72"; t_o_n_array[73] = "t_o_n_73"; t_o_n_array[74] = "t_o_n_74"; t_o_n_array[75] = "t_o_n_75"; t_o_n_array[76] = "t_o_n_76"; t_o_n_array[77] = "t_o_n_77"; t_o_n_array[78] = "t_o_n_78"; t_o_n_array[79] = "t_o_n_79";

t_id_array[80] = "t_id_80"; t_id_array[81] = "t_id_81"; t_id_array[82] = "t_id_82"; t_id_array[83] = "t_id_83"; t_id_array[84] = "t_id_84"; t_id_array[85] = "t_id_85"; t_id_array[86] = "t_id_86"; t_id_array[87] = "t_id_87"; t_id_array[88] = "t_id_88"; t_id_array[89] = "t_id_89";
t_o_id_array[80] = "t_o_id_80"; t_o_id_array[81] = "t_o_id_81"; t_o_id_array[82] = "t_o_id_82"; t_o_id_array[83] = "t_o_id_83"; t_o_id_array[84] = "t_o_id_84"; t_o_id_array[85] = "t_o_id_85"; t_o_id_array[86] = "t_o_id_86"; t_o_id_array[87] = "t_o_id_87"; t_o_id_array[88] = "t_o_id_88"; t_o_id_array[89] = "t_o_id_89";
t_o_n_array[80] = "t_o_n_80"; t_o_n_array[81] = "t_o_n_81"; t_o_n_array[82] = "t_o_n_82"; t_o_n_array[83] = "t_o_n_83"; t_o_n_array[84] = "t_o_n_84"; t_o_n_array[85] = "t_o_n_85"; t_o_n_array[86] = "t_o_n_86"; t_o_n_array[87] = "t_o_n_87"; t_o_n_array[88] = "t_o_n_88"; t_o_n_array[89] = "t_o_n_89";

t_id_array[90] = "t_id_90"; t_id_array[91] = "t_id_91"; t_id_array[92] = "t_id_92"; t_id_array[93] = "t_id_93"; t_id_array[94] = "t_id_94"; t_id_array[95] = "t_id_95"; t_id_array[96] = "t_id_96"; t_id_array[97] = "t_id_97"; t_id_array[98] = "t_id_98"; t_id_array[99] = "t_id_99";
t_o_id_array[90] = "t_o_id_90"; t_o_id_array[91] = "t_o_id_91"; t_o_id_array[92] = "t_o_id_92"; t_o_id_array[93] = "t_o_id_93"; t_o_id_array[94] = "t_o_id_94"; t_o_id_array[95] = "t_o_id_95"; t_o_id_array[96] = "t_o_id_96"; t_o_id_array[97] = "t_o_id_97"; t_o_id_array[98] = "t_o_id_98"; t_o_id_array[99] = "t_o_id_99";
t_o_n_array[90] = "t_o_n_90"; t_o_n_array[91] = "t_o_n_91"; t_o_n_array[92] = "t_o_n_92"; t_o_n_array[93] = "t_o_n_93"; t_o_n_array[94] = "t_o_n_94"; t_o_n_array[95] = "t_o_n_95"; t_o_n_array[96] = "t_o_n_96"; t_o_n_array[97] = "t_o_n_97"; t_o_n_array[98] = "t_o_n_98"; t_o_n_array[99] = "t_o_n_99";

t_id_array[100] = "t_id_100"; t_id_array[101] = "t_id_101"; t_id_array[102] = "t_id_102"; t_id_array[103] = "t_id_103"; t_id_array[104] = "t_id_104"; t_id_array[105] = "t_id_105"; t_id_array[106] = "t_id_106"; t_id_array[107] = "t_id_107"; t_id_array[108] = "t_id_108"; t_id_array[109] = "t_id_109";
t_o_id_array[100] = "t_o_id_100"; t_o_id_array[101] = "t_o_id_101"; t_o_id_array[102] = "t_o_id_102"; t_o_id_array[103] = "t_o_id_103"; t_o_id_array[104] = "t_o_id_104"; t_o_id_array[105] = "t_o_id_105"; t_o_id_array[106] = "t_o_id_106"; t_o_id_array[107] = "t_o_id_107"; t_o_id_array[108] = "t_o_id_108"; t_o_id_array[109] = "t_o_id_109";
t_o_n_array[100] = "t_o_n_100"; t_o_n_array[101] = "t_o_n_101"; t_o_n_array[102] = "t_o_n_102"; t_o_n_array[103] = "t_o_n_103"; t_o_n_array[104] = "t_o_n_104"; t_o_n_array[105] = "t_o_n_105"; t_o_n_array[106] = "t_o_n_106"; t_o_n_array[107] = "t_o_n_107"; t_o_n_array[108] = "t_o_n_108"; t_o_n_array[109] = "t_o_n_109";

t_id_array[110] = "t_id_110"; t_id_array[111] = "t_id_111"; t_id_array[112] = "t_id_112"; t_id_array[113] = "t_id_113"; t_id_array[114] = "t_id_114"; t_id_array[115] = "t_id_115"; t_id_array[116] = "t_id_116"; t_id_array[117] = "t_id_117"; t_id_array[118] = "t_id_118"; t_id_array[119] = "t_id_119";
t_o_id_array[110] = "t_o_id_110"; t_o_id_array[111] = "t_o_id_111"; t_o_id_array[112] = "t_o_id_112"; t_o_id_array[113] = "t_o_id_113"; t_o_id_array[114] = "t_o_id_114"; t_o_id_array[115] = "t_o_id_115"; t_o_id_array[116] = "t_o_id_116"; t_o_id_array[117] = "t_o_id_117"; t_o_id_array[118] = "t_o_id_118"; t_o_id_array[119] = "t_o_id_119";
t_o_n_array[110] = "t_o_n_110"; t_o_n_array[111] = "t_o_n_111"; t_o_n_array[112] = "t_o_n_112"; t_o_n_array[113] = "t_o_n_113"; t_o_n_array[114] = "t_o_n_114"; t_o_n_array[115] = "t_o_n_115"; t_o_n_array[116] = "t_o_n_116"; t_o_n_array[117] = "t_o_n_117"; t_o_n_array[118] = "t_o_n_118"; t_o_n_array[119] = "t_o_n_119";

t_id_array[120] = "t_id_120"; t_id_array[121] = "t_id_121"; t_id_array[122] = "t_id_122"; t_id_array[123] = "t_id_123"; t_id_array[124] = "t_id_124"; t_id_array[125] = "t_id_125"; t_id_array[126] = "t_id_126"; t_id_array[127] = "t_id_127"; t_id_array[128] = "t_id_128"; t_id_array[129] = "t_id_129";
t_o_id_array[120] = "t_o_id_120"; t_o_id_array[121] = "t_o_id_121"; t_o_id_array[122] = "t_o_id_122"; t_o_id_array[123] = "t_o_id_123"; t_o_id_array[124] = "t_o_id_124"; t_o_id_array[125] = "t_o_id_125"; t_o_id_array[126] = "t_o_id_126"; t_o_id_array[127] = "t_o_id_127"; t_o_id_array[128] = "t_o_id_128"; t_o_id_array[129] = "t_o_id_129";
t_o_n_array[120] = "t_o_n_120"; t_o_n_array[121] = "t_o_n_121"; t_o_n_array[122] = "t_o_n_122"; t_o_n_array[123] = "t_o_n_123"; t_o_n_array[124] = "t_o_n_124"; t_o_n_array[125] = "t_o_n_125"; t_o_n_array[126] = "t_o_n_126"; t_o_n_array[127] = "t_o_n_127"; t_o_n_array[128] = "t_o_n_128"; t_o_n_array[129] = "t_o_n_129";

t_id_array[130] = "t_id_130"; t_id_array[131] = "t_id_131"; t_id_array[132] = "t_id_132"; t_id_array[133] = "t_id_133"; t_id_array[134] = "t_id_134"; t_id_array[135] = "t_id_135"; t_id_array[136] = "t_id_136"; t_id_array[137] = "t_id_137"; t_id_array[138] = "t_id_138"; t_id_array[139] = "t_id_139";
t_o_id_array[130] = "t_o_id_130"; t_o_id_array[131] = "t_o_id_131"; t_o_id_array[132] = "t_o_id_132"; t_o_id_array[133] = "t_o_id_133"; t_o_id_array[134] = "t_o_id_134"; t_o_id_array[135] = "t_o_id_135"; t_o_id_array[136] = "t_o_id_136"; t_o_id_array[137] = "t_o_id_137"; t_o_id_array[138] = "t_o_id_138"; t_o_id_array[139] = "t_o_id_139";
t_o_n_array[130] = "t_o_n_130"; t_o_n_array[131] = "t_o_n_131"; t_o_n_array[132] = "t_o_n_132"; t_o_n_array[133] = "t_o_n_133"; t_o_n_array[134] = "t_o_n_134"; t_o_n_array[135] = "t_o_n_135"; t_o_n_array[136] = "t_o_n_136"; t_o_n_array[137] = "t_o_n_137"; t_o_n_array[138] = "t_o_n_138"; t_o_n_array[139] = "t_o_n_139";

t_id_array[140] = "t_id_140"; t_id_array[141] = "t_id_141"; t_id_array[142] = "t_id_142"; t_id_array[143] = "t_id_143"; t_id_array[144] = "t_id_144"; t_id_array[145] = "t_id_145"; t_id_array[146] = "t_id_146"; t_id_array[147] = "t_id_147"; t_id_array[148] = "t_id_148"; t_id_array[149] = "t_id_149";
t_o_id_array[140] = "t_o_id_140"; t_o_id_array[141] = "t_o_id_141"; t_o_id_array[142] = "t_o_id_142"; t_o_id_array[143] = "t_o_id_143"; t_o_id_array[144] = "t_o_id_144"; t_o_id_array[145] = "t_o_id_145"; t_o_id_array[146] = "t_o_id_146"; t_o_id_array[147] = "t_o_id_147"; t_o_id_array[148] = "t_o_id_148"; t_o_id_array[149] = "t_o_id_149";
t_o_n_array[140] = "t_o_n_140"; t_o_n_array[141] = "t_o_n_141"; t_o_n_array[142] = "t_o_n_142"; t_o_n_array[143] = "t_o_n_143"; t_o_n_array[144] = "t_o_n_144"; t_o_n_array[145] = "t_o_n_145"; t_o_n_array[146] = "t_o_n_146"; t_o_n_array[147] = "t_o_n_147"; t_o_n_array[148] = "t_o_n_148"; t_o_n_array[149] = "t_o_n_149";

t_id_array[150] = "t_id_150";
t_o_id_array[150] = "t_o_id_150";
t_o_n_array[150] = "t_o_n_150";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var t_array = [];

t_array[0] = "null"; t_array[1] = "t_1"; t_array[2] = "t_2"; t_array[3] = "t_3"; t_array[4] = "t_4"; t_array[5] = "t_5"; t_array[6] = "t_6"; t_array[7] = "t_7"; t_array[8] = "t_8"; t_array[9] = "t_9";
t_array[10] = "t_10"; t_array[11] = "t_11"; t_array[12] = "t_12"; t_array[13] = "t_13"; t_array[14] = "t_14"; t_array[15] = "t_15"; t_array[16] = "t_16"; t_array[17] = "t_17"; t_array[18] = "t_18"; t_array[19] = "t_19";
t_array[20] = "t_20"; t_array[21] = "t_21"; t_array[22] = "t_22"; t_array[23] = "t_23"; t_array[24] = "t_24"; t_array[25] = "t_25"; t_array[26] = "t_26"; t_array[27] = "t_27"; t_array[28] = "t_28"; t_array[29] = "t_29";
t_array[30] = "t_30"; t_array[31] = "t_31"; t_array[32] = "t_32"; t_array[33] = "t_33"; t_array[34] = "t_34"; t_array[35] = "t_35"; t_array[36] = "t_36"; t_array[37] = "t_37"; t_array[38] = "t_38"; t_array[39] = "t_39";
t_array[40] = "t_40"; t_array[41] = "t_41"; t_array[42] = "t_42"; t_array[43] = "t_43"; t_array[44] = "t_44"; t_array[45] = "t_45"; t_array[46] = "t_46"; t_array[47] = "t_47"; t_array[48] = "t_48"; t_array[49] = "t_49";
t_array[50] = "t_50"; t_array[51] = "t_51"; t_array[52] = "t_52"; t_array[53] = "t_53"; t_array[54] = "t_54"; t_array[55] = "t_55"; t_array[56] = "t_56"; t_array[57] = "t_57"; t_array[58] = "t_58"; t_array[59] = "t_59";
t_array[60] = "t_60"; t_array[61] = "t_61"; t_array[62] = "t_62"; t_array[63] = "t_63"; t_array[64] = "t_64"; t_array[65] = "t_65"; t_array[66] = "t_66"; t_array[67] = "t_67"; t_array[68] = "t_68"; t_array[69] = "t_69";
t_array[70] = "t_70"; t_array[71] = "t_71"; t_array[72] = "t_72"; t_array[73] = "t_73"; t_array[74] = "t_74"; t_array[75] = "t_75"; t_array[76] = "t_76"; t_array[77] = "t_77"; t_array[78] = "t_78"; t_array[79] = "t_79";
t_array[80] = "t_80"; t_array[81] = "t_81"; t_array[82] = "t_82"; t_array[83] = "t_83"; t_array[84] = "t_84"; t_array[85] = "t_85"; t_array[86] = "t_86"; t_array[87] = "t_87"; t_array[88] = "t_88"; t_array[89] = "t_89";
t_array[90] = "t_90"; t_array[91] = "t_91"; t_array[92] = "t_92"; t_array[93] = "t_93"; t_array[94] = "t_94"; t_array[95] = "t_95"; t_array[96] = "t_96"; t_array[97] = "t_97"; t_array[98] = "t_98"; t_array[99] = "t_99";
t_array[100] = "t_100"; t_array[101] = "t_101"; t_array[102] = "t_102"; t_array[103] = "t_103"; t_array[104] = "t_104"; t_array[105] = "t_105"; t_array[106] = "t_106"; t_array[107] = "t_107"; t_array[108] = "t_108"; t_array[109] = "t_109";
t_array[110] = "t_110"; t_array[111] = "t_111"; t_array[112] = "t_112"; t_array[113] = "t_113"; t_array[114] = "t_114"; t_array[115] = "t_115"; t_array[116] = "t_116"; t_array[117] = "t_117"; t_array[118] = "t_118"; t_array[119] = "t_119";
t_array[120] = "t_120"; t_array[121] = "t_121"; t_array[122] = "t_122"; t_array[123] = "t_123"; t_array[124] = "t_124"; t_array[125] = "t_125"; t_array[126] = "t_126"; t_array[127] = "t_127"; t_array[128] = "t_128"; t_array[129] = "t_129";
t_array[130] = "t_130"; t_array[131] = "t_131"; t_array[132] = "t_132"; t_array[133] = "t_133"; t_array[134] = "t_134"; t_array[135] = "t_135"; t_array[136] = "t_136"; t_array[137] = "t_137"; t_array[138] = "t_138"; t_array[139] = "t_139";
t_array[140] = "t_140"; t_array[141] = "t_141"; t_array[142] = "t_142"; t_array[143] = "t_143"; t_array[144] = "t_144"; t_array[145] = "t_145"; t_array[146] = "t_146"; t_array[147] = "t_147"; t_array[148] = "t_148"; t_array[149] = "t_149";
t_array[150] = "t_150";



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function Arrange_table() {

    for(var j=1; j < 151 ; j++){
      var txt_value = document.getElementById(t_o_id_array[j]).innerHTML;

      if (txt_value == "undefined" || txt_value == "null" || txt_value == "") {
        //alert(txt_value);
        document.getElementById(t_array[j]).style.display = 'none';
      }
      else{
        //alert(txt_value);
        document.getElementById(t_array[j]).style.display = '';
      }
    }
}











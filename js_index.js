var t_array = [];
var t_o_id_array = [];
var t_o_n_array = [];
var s_n_array = [];

declare_arrays();
Arrange_table();


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if (user != null) {

      var user_uid = user.uid;
      document.getElementById('login_div').style.display = 'none'
      document.getElementById('Home_div').style.display = 'block'

      var Seller_name = firebase.database().ref().child("Sellers").child(user_uid);
      Seller_name.on('value', snap => {
        var Seller_name = snap.val();
        document.getElementById("user_name").innerText = Seller_name;
      });

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
    document.getElementById("error").innerText = "";

  }
}

function clr_err() {
  document.getElementById("error").innerText = "";
  document.getElementById("Success").innerText = "";
}

function Sell_a_ticket() {
  var buyer_ticket_no = document.getElementById("ticket_no").value;
  var buyer_nsbm_id = document.getElementById("nsbm_id").value;
  var buyer_name = document.getElementById("name").value;
  document.getElementById("error").style.display = "";

  const ext_buyer_ticket_no = firebase.database().ref().child("tickets").child(buyer_ticket_no - 100);
  ext_buyer_ticket_no.on('value', snap => {
    const ext_buyer_ticket_no = JSON.stringify(snap.val());

    if (buyer_ticket_no == '' || buyer_nsbm_id == '' || buyer_name == '') {
      document.getElementById("error").innerText = "Values cannot be null";
    }
    else if (buyer_ticket_no <= 100 || buyer_ticket_no > 250) {
      document.getElementById("error").innerText = "Invalid Ticket number";
    }
    else if (ext_buyer_ticket_no != "null") {
      document.getElementById("error").innerText = "This Ticket Already has been sold!!";
    }
    else {
      var firebaseRef = firebase.database().ref();
      var seller = document.getElementById("user_name").innerText;

      firebaseRef.child("tickets").child(buyer_ticket_no - 100).child("buyer_nsbm_id").set(buyer_nsbm_id);
      firebaseRef.child("tickets").child(buyer_ticket_no - 100).child("buyer_name").set(buyer_name);
      firebaseRef.child("tickets").child(buyer_ticket_no - 100).child("seller_name").set(seller);

      document.getElementById("error").style.display = "none";
      document.getElementById("Success").innerText = "Success";
      document.getElementById("ticket_no").value = "";
      document.getElementById("nsbm_id").value = "";
      document.getElementById("name").value = "";


    }

  });

}

for (let index = 1; index < 151; index++) {
  load_data(index);
}

function load_data(x) {
  var hh = 0;

  /////////////////////////////////////////////////////////  

  var t_o_id = firebase.database().ref().child("tickets").child(x).child("buyer_nsbm_id");
  t_o_id.on('value', snap => {
    var t_o_id = snap.val();
    document.getElementById(t_o_id_array[x]).innerText = t_o_id;
    Arrange_table();
  });

  var t_o_n = firebase.database().ref().child("tickets").child(x).child("buyer_name");
  t_o_n.on('value', snap => {
    var t_o_n = snap.val();
    document.getElementById(t_o_n_array[x]).innerText = t_o_n;
    Arrange_table();
  });

  var s_n = firebase.database().ref().child("tickets").child(x).child("seller_name");
  s_n.on('value', snap => {
    var s_n = snap.val();
    document.getElementById(s_n_array[x]).innerText = s_n;

    var current_user = document.getElementById("user_name").innerText;
    if(s_n == "kavindu tissera"){
      hh++;
      document.getElementById("demo").innerText = hh;
    }

    Arrange_table();
  });
  /////////////////////////////////////////////////////////

}


function declare_arrays() {

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  t_o_id_array[0] = "null"; t_o_id_array[1] = "t_o_id_1"; t_o_id_array[2] = "t_o_id_2"; t_o_id_array[3] = "t_o_id_3"; t_o_id_array[4] = "t_o_id_4"; t_o_id_array[5] = "t_o_id_5"; t_o_id_array[6] = "t_o_id_6"; t_o_id_array[7] = "t_o_id_7"; t_o_id_array[8] = "t_o_id_8"; t_o_id_array[9] = "t_o_id_9";
  t_o_id_array[10] = "t_o_id_10"; t_o_id_array[11] = "t_o_id_11"; t_o_id_array[12] = "t_o_id_12"; t_o_id_array[13] = "t_o_id_13"; t_o_id_array[14] = "t_o_id_14"; t_o_id_array[15] = "t_o_id_15"; t_o_id_array[16] = "t_o_id_16"; t_o_id_array[17] = "t_o_id_17"; t_o_id_array[18] = "t_o_id_18"; t_o_id_array[19] = "t_o_id_19";
  t_o_id_array[20] = "t_o_id_20"; t_o_id_array[21] = "t_o_id_21"; t_o_id_array[22] = "t_o_id_22"; t_o_id_array[23] = "t_o_id_23"; t_o_id_array[24] = "t_o_id_24"; t_o_id_array[25] = "t_o_id_25"; t_o_id_array[26] = "t_o_id_26"; t_o_id_array[27] = "t_o_id_27"; t_o_id_array[28] = "t_o_id_28"; t_o_id_array[29] = "t_o_id_29";
  t_o_id_array[30] = "t_o_id_30"; t_o_id_array[31] = "t_o_id_31"; t_o_id_array[32] = "t_o_id_32"; t_o_id_array[33] = "t_o_id_33"; t_o_id_array[34] = "t_o_id_34"; t_o_id_array[35] = "t_o_id_35"; t_o_id_array[36] = "t_o_id_36"; t_o_id_array[37] = "t_o_id_37"; t_o_id_array[38] = "t_o_id_38"; t_o_id_array[39] = "t_o_id_39";
  t_o_id_array[40] = "t_o_id_40"; t_o_id_array[41] = "t_o_id_41"; t_o_id_array[42] = "t_o_id_42"; t_o_id_array[43] = "t_o_id_43"; t_o_id_array[44] = "t_o_id_44"; t_o_id_array[45] = "t_o_id_45"; t_o_id_array[46] = "t_o_id_46"; t_o_id_array[47] = "t_o_id_47"; t_o_id_array[48] = "t_o_id_48"; t_o_id_array[49] = "t_o_id_49";
  t_o_id_array[50] = "t_o_id_50"; t_o_id_array[51] = "t_o_id_51"; t_o_id_array[52] = "t_o_id_52"; t_o_id_array[53] = "t_o_id_53"; t_o_id_array[54] = "t_o_id_54"; t_o_id_array[55] = "t_o_id_55"; t_o_id_array[56] = "t_o_id_56"; t_o_id_array[57] = "t_o_id_57"; t_o_id_array[58] = "t_o_id_58"; t_o_id_array[59] = "t_o_id_59";
  t_o_id_array[60] = "t_o_id_60"; t_o_id_array[61] = "t_o_id_61"; t_o_id_array[62] = "t_o_id_62"; t_o_id_array[63] = "t_o_id_63"; t_o_id_array[64] = "t_o_id_64"; t_o_id_array[65] = "t_o_id_65"; t_o_id_array[66] = "t_o_id_66"; t_o_id_array[67] = "t_o_id_67"; t_o_id_array[68] = "t_o_id_68"; t_o_id_array[69] = "t_o_id_69";
  t_o_id_array[70] = "t_o_id_70"; t_o_id_array[71] = "t_o_id_71"; t_o_id_array[72] = "t_o_id_72"; t_o_id_array[73] = "t_o_id_73"; t_o_id_array[74] = "t_o_id_74"; t_o_id_array[75] = "t_o_id_75"; t_o_id_array[76] = "t_o_id_76"; t_o_id_array[77] = "t_o_id_77"; t_o_id_array[78] = "t_o_id_78"; t_o_id_array[79] = "t_o_id_79";
  t_o_id_array[80] = "t_o_id_80"; t_o_id_array[81] = "t_o_id_81"; t_o_id_array[82] = "t_o_id_82"; t_o_id_array[83] = "t_o_id_83"; t_o_id_array[84] = "t_o_id_84"; t_o_id_array[85] = "t_o_id_85"; t_o_id_array[86] = "t_o_id_86"; t_o_id_array[87] = "t_o_id_87"; t_o_id_array[88] = "t_o_id_88"; t_o_id_array[89] = "t_o_id_89";
  t_o_id_array[90] = "t_o_id_90"; t_o_id_array[91] = "t_o_id_91"; t_o_id_array[92] = "t_o_id_92"; t_o_id_array[93] = "t_o_id_93"; t_o_id_array[94] = "t_o_id_94"; t_o_id_array[95] = "t_o_id_95"; t_o_id_array[96] = "t_o_id_96"; t_o_id_array[97] = "t_o_id_97"; t_o_id_array[98] = "t_o_id_98"; t_o_id_array[99] = "t_o_id_99";
  t_o_id_array[100] = "t_o_id_100"; t_o_id_array[101] = "t_o_id_101"; t_o_id_array[102] = "t_o_id_102"; t_o_id_array[103] = "t_o_id_103"; t_o_id_array[104] = "t_o_id_104"; t_o_id_array[105] = "t_o_id_105"; t_o_id_array[106] = "t_o_id_106"; t_o_id_array[107] = "t_o_id_107"; t_o_id_array[108] = "t_o_id_108"; t_o_id_array[109] = "t_o_id_109";
  t_o_id_array[110] = "t_o_id_110"; t_o_id_array[111] = "t_o_id_111"; t_o_id_array[112] = "t_o_id_112"; t_o_id_array[113] = "t_o_id_113"; t_o_id_array[114] = "t_o_id_114"; t_o_id_array[115] = "t_o_id_115"; t_o_id_array[116] = "t_o_id_116"; t_o_id_array[117] = "t_o_id_117"; t_o_id_array[118] = "t_o_id_118"; t_o_id_array[119] = "t_o_id_119";
  t_o_id_array[120] = "t_o_id_120"; t_o_id_array[121] = "t_o_id_121"; t_o_id_array[122] = "t_o_id_122"; t_o_id_array[123] = "t_o_id_123"; t_o_id_array[124] = "t_o_id_124"; t_o_id_array[125] = "t_o_id_125"; t_o_id_array[126] = "t_o_id_126"; t_o_id_array[127] = "t_o_id_127"; t_o_id_array[128] = "t_o_id_128"; t_o_id_array[129] = "t_o_id_129";
  t_o_id_array[130] = "t_o_id_130"; t_o_id_array[131] = "t_o_id_131"; t_o_id_array[132] = "t_o_id_132"; t_o_id_array[133] = "t_o_id_133"; t_o_id_array[134] = "t_o_id_134"; t_o_id_array[135] = "t_o_id_135"; t_o_id_array[136] = "t_o_id_136"; t_o_id_array[137] = "t_o_id_137"; t_o_id_array[138] = "t_o_id_138"; t_o_id_array[139] = "t_o_id_139";
  t_o_id_array[140] = "t_o_id_140"; t_o_id_array[141] = "t_o_id_141"; t_o_id_array[142] = "t_o_id_142"; t_o_id_array[143] = "t_o_id_143"; t_o_id_array[144] = "t_o_id_144"; t_o_id_array[145] = "t_o_id_145"; t_o_id_array[146] = "t_o_id_146"; t_o_id_array[147] = "t_o_id_147"; t_o_id_array[148] = "t_o_id_148"; t_o_id_array[149] = "t_o_id_149";
  t_o_id_array[150] = "t_o_id_150";

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  t_o_n_array[0] = "null"; t_o_n_array[1] = "t_o_n_1"; t_o_n_array[2] = "t_o_n_2"; t_o_n_array[3] = "t_o_n_3"; t_o_n_array[4] = "t_o_n_4"; t_o_n_array[5] = "t_o_n_5"; t_o_n_array[6] = "t_o_n_6"; t_o_n_array[7] = "t_o_n_7"; t_o_n_array[8] = "t_o_n_8"; t_o_n_array[9] = "t_o_n_9";
  t_o_n_array[10] = "t_o_n_10"; t_o_n_array[11] = "t_o_n_11"; t_o_n_array[12] = "t_o_n_12"; t_o_n_array[13] = "t_o_n_13"; t_o_n_array[14] = "t_o_n_14"; t_o_n_array[15] = "t_o_n_15"; t_o_n_array[16] = "t_o_n_16"; t_o_n_array[17] = "t_o_n_17"; t_o_n_array[18] = "t_o_n_18"; t_o_n_array[19] = "t_o_n_19";
  t_o_n_array[20] = "t_o_n_20"; t_o_n_array[21] = "t_o_n_21"; t_o_n_array[22] = "t_o_n_22"; t_o_n_array[23] = "t_o_n_23"; t_o_n_array[24] = "t_o_n_24"; t_o_n_array[25] = "t_o_n_25"; t_o_n_array[26] = "t_o_n_26"; t_o_n_array[27] = "t_o_n_27"; t_o_n_array[28] = "t_o_n_28"; t_o_n_array[29] = "t_o_n_29";
  t_o_n_array[30] = "t_o_n_30"; t_o_n_array[31] = "t_o_n_31"; t_o_n_array[32] = "t_o_n_32"; t_o_n_array[33] = "t_o_n_33"; t_o_n_array[34] = "t_o_n_34"; t_o_n_array[35] = "t_o_n_35"; t_o_n_array[36] = "t_o_n_36"; t_o_n_array[37] = "t_o_n_37"; t_o_n_array[38] = "t_o_n_38"; t_o_n_array[39] = "t_o_n_39";
  t_o_n_array[40] = "t_o_n_40"; t_o_n_array[41] = "t_o_n_41"; t_o_n_array[42] = "t_o_n_42"; t_o_n_array[43] = "t_o_n_43"; t_o_n_array[44] = "t_o_n_44"; t_o_n_array[45] = "t_o_n_45"; t_o_n_array[46] = "t_o_n_46"; t_o_n_array[47] = "t_o_n_47"; t_o_n_array[48] = "t_o_n_48"; t_o_n_array[49] = "t_o_n_49";
  t_o_n_array[50] = "t_o_n_50"; t_o_n_array[51] = "t_o_n_51"; t_o_n_array[52] = "t_o_n_52"; t_o_n_array[53] = "t_o_n_53"; t_o_n_array[54] = "t_o_n_54"; t_o_n_array[55] = "t_o_n_55"; t_o_n_array[56] = "t_o_n_56"; t_o_n_array[57] = "t_o_n_57"; t_o_n_array[58] = "t_o_n_58"; t_o_n_array[59] = "t_o_n_59";
  t_o_n_array[60] = "t_o_n_60"; t_o_n_array[61] = "t_o_n_61"; t_o_n_array[62] = "t_o_n_62"; t_o_n_array[63] = "t_o_n_63"; t_o_n_array[64] = "t_o_n_64"; t_o_n_array[65] = "t_o_n_65"; t_o_n_array[66] = "t_o_n_66"; t_o_n_array[67] = "t_o_n_67"; t_o_n_array[68] = "t_o_n_68"; t_o_n_array[69] = "t_o_n_69";
  t_o_n_array[70] = "t_o_n_70"; t_o_n_array[71] = "t_o_n_71"; t_o_n_array[72] = "t_o_n_72"; t_o_n_array[73] = "t_o_n_73"; t_o_n_array[74] = "t_o_n_74"; t_o_n_array[75] = "t_o_n_75"; t_o_n_array[76] = "t_o_n_76"; t_o_n_array[77] = "t_o_n_77"; t_o_n_array[78] = "t_o_n_78"; t_o_n_array[79] = "t_o_n_79";
  t_o_n_array[80] = "t_o_n_80"; t_o_n_array[81] = "t_o_n_81"; t_o_n_array[82] = "t_o_n_82"; t_o_n_array[83] = "t_o_n_83"; t_o_n_array[84] = "t_o_n_84"; t_o_n_array[85] = "t_o_n_85"; t_o_n_array[86] = "t_o_n_86"; t_o_n_array[87] = "t_o_n_87"; t_o_n_array[88] = "t_o_n_88"; t_o_n_array[89] = "t_o_n_89";
  t_o_n_array[90] = "t_o_n_90"; t_o_n_array[91] = "t_o_n_91"; t_o_n_array[92] = "t_o_n_92"; t_o_n_array[93] = "t_o_n_93"; t_o_n_array[94] = "t_o_n_94"; t_o_n_array[95] = "t_o_n_95"; t_o_n_array[96] = "t_o_n_96"; t_o_n_array[97] = "t_o_n_97"; t_o_n_array[98] = "t_o_n_98"; t_o_n_array[99] = "t_o_n_99";
  t_o_n_array[100] = "t_o_n_100"; t_o_n_array[101] = "t_o_n_101"; t_o_n_array[102] = "t_o_n_102"; t_o_n_array[103] = "t_o_n_103"; t_o_n_array[104] = "t_o_n_104"; t_o_n_array[105] = "t_o_n_105"; t_o_n_array[106] = "t_o_n_106"; t_o_n_array[107] = "t_o_n_107"; t_o_n_array[108] = "t_o_n_108"; t_o_n_array[109] = "t_o_n_109";
  t_o_n_array[110] = "t_o_n_110"; t_o_n_array[111] = "t_o_n_111"; t_o_n_array[112] = "t_o_n_112"; t_o_n_array[113] = "t_o_n_113"; t_o_n_array[114] = "t_o_n_114"; t_o_n_array[115] = "t_o_n_115"; t_o_n_array[116] = "t_o_n_116"; t_o_n_array[117] = "t_o_n_117"; t_o_n_array[118] = "t_o_n_118"; t_o_n_array[119] = "t_o_n_119";
  t_o_n_array[120] = "t_o_n_120"; t_o_n_array[121] = "t_o_n_121"; t_o_n_array[122] = "t_o_n_122"; t_o_n_array[123] = "t_o_n_123"; t_o_n_array[124] = "t_o_n_124"; t_o_n_array[125] = "t_o_n_125"; t_o_n_array[126] = "t_o_n_126"; t_o_n_array[127] = "t_o_n_127"; t_o_n_array[128] = "t_o_n_128"; t_o_n_array[129] = "t_o_n_129";
  t_o_n_array[130] = "t_o_n_130"; t_o_n_array[131] = "t_o_n_131"; t_o_n_array[132] = "t_o_n_132"; t_o_n_array[133] = "t_o_n_133"; t_o_n_array[134] = "t_o_n_134"; t_o_n_array[135] = "t_o_n_135"; t_o_n_array[136] = "t_o_n_136"; t_o_n_array[137] = "t_o_n_137"; t_o_n_array[138] = "t_o_n_138"; t_o_n_array[139] = "t_o_n_139";
  t_o_n_array[140] = "t_o_n_140"; t_o_n_array[141] = "t_o_n_141"; t_o_n_array[142] = "t_o_n_142"; t_o_n_array[143] = "t_o_n_143"; t_o_n_array[144] = "t_o_n_144"; t_o_n_array[145] = "t_o_n_145"; t_o_n_array[146] = "t_o_n_146"; t_o_n_array[147] = "t_o_n_147"; t_o_n_array[148] = "t_o_n_148"; t_o_n_array[149] = "t_o_n_149";
  t_o_n_array[150] = "t_o_n_150";

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  s_n_array[0] = "null"; s_n_array[1] = "s_n_1"; s_n_array[2] = "s_n_2"; s_n_array[3] = "s_n_3"; s_n_array[4] = "s_n_4"; s_n_array[5] = "s_n_5"; s_n_array[6] = "s_n_6"; s_n_array[7] = "s_n_7"; s_n_array[8] = "s_n_8"; s_n_array[9] = "s_n_9";
  s_n_array[10] = "s_n_10"; s_n_array[11] = "s_n_11"; s_n_array[12] = "s_n_12"; s_n_array[13] = "s_n_13"; s_n_array[14] = "s_n_14"; s_n_array[15] = "s_n_15"; s_n_array[16] = "s_n_16"; s_n_array[17] = "s_n_17"; s_n_array[18] = "s_n_18"; s_n_array[19] = "s_n_19";
  s_n_array[20] = "s_n_20"; s_n_array[21] = "s_n_21"; s_n_array[22] = "s_n_22"; s_n_array[23] = "s_n_23"; s_n_array[24] = "s_n_24"; s_n_array[25] = "s_n_25"; s_n_array[26] = "s_n_26"; s_n_array[27] = "s_n_27"; s_n_array[28] = "s_n_28"; s_n_array[29] = "s_n_29";
  s_n_array[30] = "s_n_30"; s_n_array[31] = "s_n_31"; s_n_array[32] = "s_n_32"; s_n_array[33] = "s_n_33"; s_n_array[34] = "s_n_34"; s_n_array[35] = "s_n_35"; s_n_array[36] = "s_n_36"; s_n_array[37] = "s_n_37"; s_n_array[38] = "s_n_38"; s_n_array[39] = "s_n_39";
  s_n_array[40] = "s_n_40"; s_n_array[41] = "s_n_41"; s_n_array[42] = "s_n_42"; s_n_array[43] = "s_n_43"; s_n_array[44] = "s_n_44"; s_n_array[45] = "s_n_45"; s_n_array[46] = "s_n_46"; s_n_array[47] = "s_n_47"; s_n_array[48] = "s_n_48"; s_n_array[49] = "s_n_49";
  s_n_array[50] = "s_n_50"; s_n_array[51] = "s_n_51"; s_n_array[52] = "s_n_52"; s_n_array[53] = "s_n_53"; s_n_array[54] = "s_n_54"; s_n_array[55] = "s_n_55"; s_n_array[56] = "s_n_56"; s_n_array[57] = "s_n_57"; s_n_array[58] = "s_n_58"; s_n_array[59] = "s_n_59";
  s_n_array[60] = "s_n_60"; s_n_array[61] = "s_n_61"; s_n_array[62] = "s_n_62"; s_n_array[63] = "s_n_63"; s_n_array[64] = "s_n_64"; s_n_array[65] = "s_n_65"; s_n_array[66] = "s_n_66"; s_n_array[67] = "s_n_67"; s_n_array[68] = "s_n_68"; s_n_array[69] = "s_n_69";
  s_n_array[70] = "s_n_70"; s_n_array[71] = "s_n_71"; s_n_array[72] = "s_n_72"; s_n_array[73] = "s_n_73"; s_n_array[74] = "s_n_74"; s_n_array[75] = "s_n_75"; s_n_array[76] = "s_n_76"; s_n_array[77] = "s_n_77"; s_n_array[78] = "s_n_78"; s_n_array[79] = "s_n_79";
  s_n_array[80] = "s_n_80"; s_n_array[81] = "s_n_81"; s_n_array[82] = "s_n_82"; s_n_array[83] = "s_n_83"; s_n_array[84] = "s_n_84"; s_n_array[85] = "s_n_85"; s_n_array[86] = "s_n_86"; s_n_array[87] = "s_n_87"; s_n_array[88] = "s_n_88"; s_n_array[89] = "s_n_89";
  s_n_array[90] = "s_n_90"; s_n_array[91] = "s_n_91"; s_n_array[92] = "s_n_92"; s_n_array[93] = "s_n_93"; s_n_array[94] = "s_n_94"; s_n_array[95] = "s_n_95"; s_n_array[96] = "s_n_96"; s_n_array[97] = "s_n_97"; s_n_array[98] = "s_n_98"; s_n_array[99] = "s_n_99";
  s_n_array[100] = "s_n_100"; s_n_array[101] = "s_n_101"; s_n_array[102] = "s_n_102"; s_n_array[103] = "s_n_103"; s_n_array[104] = "s_n_104"; s_n_array[105] = "s_n_105"; s_n_array[106] = "s_n_106"; s_n_array[107] = "s_n_107"; s_n_array[108] = "s_n_108"; s_n_array[109] = "s_n_109";
  s_n_array[110] = "s_n_110"; s_n_array[111] = "s_n_111"; s_n_array[112] = "s_n_112"; s_n_array[113] = "s_n_113"; s_n_array[114] = "s_n_114"; s_n_array[115] = "s_n_115"; s_n_array[116] = "s_n_116"; s_n_array[117] = "s_n_117"; s_n_array[118] = "s_n_118"; s_n_array[119] = "s_n_119";
  s_n_array[120] = "s_n_120"; s_n_array[121] = "s_n_121"; s_n_array[122] = "s_n_122"; s_n_array[123] = "s_n_123"; s_n_array[124] = "s_n_124"; s_n_array[125] = "s_n_125"; s_n_array[126] = "s_n_126"; s_n_array[127] = "s_n_127"; s_n_array[128] = "s_n_128"; s_n_array[129] = "s_n_129";
  s_n_array[130] = "s_n_130"; s_n_array[131] = "s_n_131"; s_n_array[132] = "s_n_132"; s_n_array[133] = "s_n_133"; s_n_array[134] = "s_n_134"; s_n_array[135] = "s_n_135"; s_n_array[136] = "s_n_136"; s_n_array[137] = "s_n_137"; s_n_array[138] = "s_n_138"; s_n_array[139] = "s_n_139";
  s_n_array[140] = "s_n_140"; s_n_array[141] = "s_n_141"; s_n_array[142] = "s_n_142"; s_n_array[143] = "s_n_143"; s_n_array[144] = "s_n_144"; s_n_array[145] = "s_n_145"; s_n_array[146] = "s_n_146"; s_n_array[147] = "s_n_147"; s_n_array[148] = "s_n_148"; s_n_array[149] = "s_n_149";
  s_n_array[150] = "s_n_150";

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

}


function Arrange_table() {
  
  for (var j = 1; j < 151; j++) {
    var txt_value = document.getElementById(t_o_id_array[j]).innerText;

    if (txt_value == "undefined" || txt_value == "null" || txt_value == "") {
      document.getElementById(t_array[j]).style.display = 'none';
    }
    else {
      document.getElementById(t_array[j]).style.display = '';
    }
  }
}











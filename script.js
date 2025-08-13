document.getElementById('y').textContent = new Date().getFullYear();

function selectPlan(plan){ alert(`Selected plan: ${plan}`); }
function submitForm(e){ e.preventDefault(); alert("Thanks! We'll get back to you."); return false; }

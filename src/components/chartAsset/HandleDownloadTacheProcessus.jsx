// exports function handleDownload() = async e => {
//     e.preventDefault();
//     const generateXSLCharline = await fetch('/service/generateXSLCharline',
//       {
//         method: 'POST',
//         headers:
//         {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(
//           {
//             tauxActivite: this.state.responseToPost.taux,
//             mois: this.state.responseToPost.mois
//           }),
//       });
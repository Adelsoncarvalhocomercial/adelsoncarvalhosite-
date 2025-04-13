
function calculateROI() {
    var investment = parseFloat(document.getElementById('investment').value);
    var cpc = parseFloat(document.getElementById('cpc').value);
    var conversionRate = parseFloat(document.getElementById('conversionRate').value);

    if (!investment || !cpc || !conversionRate) {
        document.getElementById('roiResult').innerText = 'Por favor, preencha todos os campos.';
        return;
    }

    var estimatedConversions = (investment / cpc) * (conversionRate / 100);
    var roi = estimatedConversions * 100;

    document.getElementById('roiResult').innerText = `ROI estimado: R$ ${roi.toFixed(2)}`;
}

function submitQuiz() {
    var goal = document.getElementById('goal').value;
    var budget = document.getElementById('budget').value;

    var resultText = `Você deve focar em anúncios no ${goal}, com um orçamento de R$${budget}. Recomendamos estratégias de anúncios específicas para o seu perfil!`;
    document.getElementById('quizResult').innerText = resultText;
}

function submitSurvey() {
    var challenges = document.getElementById('challenges').value;

    var resultText = `Desafio Selecionado: ${challenges}. Vamos agendar uma consultoria para superar esse obstáculo!`;
    document.getElementById('surveyResult').innerText = resultText;
}

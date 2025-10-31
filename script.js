window.addEventListener('load', () => {
    
    // ▼▼▼ 여기에 본인의 웹사이트 URL을 입력하세요 ▼▼▼
    const mySiteUrl = "https://textbook.tdotcorp.kr"; 
    // ▲▲▲ 여기에 본인의 웹사이트 URL을 입력하세요 ▲▲▲

    const iframe = document.getElementById('site-frame');
    const loadingOverlay = document.getElementById('loading-overlay');

    // 1. iframe의 URL 설정
    iframe.src = mySiteUrl;

    // 2. iframe 로드가 완료되면 로딩 화면 숨기기
    iframe.addEventListener('load', () => {
        // 로드가 성공하면 로딩 화면을 서서히 투명하게 만듦
        loadingOverlay.style.opacity = '0';
        
        // 애니메이션(0.5초)이 끝난 후 실제로 숨김
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    });

    // 3. (선택 사항) 로드 실패 시 (예: X-Frame-Options 오류)
    iframe.addEventListener('error', (e) => {
        console.error('iframe 로드에 실패했습니다.', e);
        // 로딩 화면에 오류 메시지 표시
        if(loadingOverlay) {
            loadingOverlay.innerHTML = '<p>사이트를 불러오는 데 실패했습니다.<br>X-Frame-Options 설정을 확인하세요.</p>';
            loadingOverlay.style.color = 'red';
        }
    });
});

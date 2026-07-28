document.addEventListener('DOMContentLoaded', () => {
  // Toast notification
  window.showToast = function(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  // Copy BibTeX
  window.copyBibtex = function() {
    const bibtexElement = document.getElementById('bibtex-code');
    if (!bibtexElement) return;
    
    const textToCopy = bibtexElement.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('✓ Đã sao chép BibTeX vào clipboard!');
    }).catch(err => {
      console.error('Không thể sao chép: ', err);
    });
  };
});

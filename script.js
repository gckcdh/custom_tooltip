const cells = document.querySelectorAll('.cell');
const tooltip = document.getElementById('custom-tooltip');

cells.forEach(cell => {
    cell.addEventListener('mouseenter', (event) => {
        const tooltipText = event.target.getAttribute('data-tooltip');
        tooltip.innerHTML = tooltipText;
        const cellRect = event.target.getBoundingClientRect();
        tooltip.style.top = `${cellRect.top - 30}px`;
        tooltip.style.left = `${cellRect.left + cellRect.width / 2}px`; 
        tooltip.style.display = 'block';
    });

    cell.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
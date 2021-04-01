fetch('https://reqres.in/api/colors')
    .then(res => res.json())
    .then(data => {
        for(currentPage = 1; currentPage <= data.total_pages; currentPage++){
            fetch('https://reqres.in/api/colors?page='+currentPage)
            .then(res => res.json())
            .then(data => {
                data.data.forEach(e => {
                    let list = [];
                    list.push(e.id)
                    // VARIABLES DEL COLOR (NOMBRE, AÃ‘O, COLOR, PANTONE)
                    const id = e.id;
                    const name = e.name;
                    const year = e.year;
                    const hexa = e.color;
                    const pantone = e.pantone_value;

                    // OBENCIÃ¯Ã“N CONTENEDOR COLORES
                    let colores = document.getElementById('colores');

                    // CREACIÃ“N DIVS CONTENEDORES DE LA DATA
                    let color_container = document.createElement('div');
                    let color_header = document.createElement('div');
                    let color_body = document.createElement('div');
                    color_body.setAttribute('click', 'copyToClipboard('+hexa+')');
                    let color_footer = document.createElement('div');

                    // ASIGNACIÃ“N DE CLASES, ID Y ESTILO PARA CADA ELEMENTO CORRESPONDIENTE
                    let color_parrafo_year = document.createElement('p');
                    color_parrafo_year.className = 'parrafo_year';
                    let color_parrafo_name = document.createElement('p');
                    color_parrafo_name.className = 'parrafo_name';
                    let color_parrafo_hexa = document.createElement('input');
                    color_parrafo_hexa.className = "parrafo_hexa";
                    color_parrafo_hexa.setAttribute('readonly', true);
                    color_parrafo_hexa.setAttribute('value', hexa)
                    let color_parrafo_pantone = document.createElement('p');
                    color_parrafo_pantone.className = "parrafo_pantone";

                    color_container.style.backgroundColor = hexa;

                    color_container.className = "color";
                    color_header.className = "color-header";
                    color_body.className = "color-body";
                    color_footer.className = "color-footer";

                    // AGREGAR DATA A LOS CONTENEDORES
                    color_container.append(color_header, color_body, color_footer);
                    color_header.append(color_parrafo_year);
                    color_body.append(color_parrafo_name, color_parrafo_hexa);
                    color_footer.append(color_parrafo_pantone);

                    color_parrafo_year.append(year);
                    color_parrafo_name.append(name);
                    color_parrafo_hexa.append(hexa);
                    color_parrafo_pantone.append(pantone);

                    colores.append(color_container);

                });

            })
            .catch(e => console.log(e))
        }
});

function modalCopied(year, hexa, pantone){
    const body = document.querySelector('body');

    // CREACIÓN CONSTANTES AÑO Y PANTONE
    const year_modal = document.createElement('p');
    year_modal.append(year);
    const pantone_modal = document.createElement('p');
    pantone_modal.append(pantone);

    // CREACIÓN MODAL
    const modal = document.createElement('div');
    modal.className = "modal-copied fade-in";
    modal.id = "modal_copied";

    // CREACIÓN BODY MODAL
    const modal_body = document.createElement('div');
    modal_body.className = "modal-body";
    modal_body.style = "background-color:"+hexa;

    // CREACIÓN HEADER MODAL
    const header = document.createElement('div');
    header.className = "header-modal-copied";
    const button_close = document.createElement('button');
    button_close.className = "button-close";
    button_close.id = "button_close";
    button_close.setAttribute('onclick', 'closeModal()');
    const button_close_icon = document.createElement('i');
    button_close_icon.className = "fa fa-times";
    button_close.append(button_close_icon);
    header.append(year_modal);
    header.append(button_close)

    // CREACIÓN TEXTO MODAL
    const modal_text = document.createElement('p');
    modal_text.append('¡Copiado!');

    // CREACIÓN FOOTER MODAL
    const footer = document.createElement('div');
    footer.className = "footer-modal-copied";
    footer.append(pantone_modal);

    // RELLENAR MODAL CON LA INFORMACIÓN REQUERIDA
    modal_body.append(header);
    modal_body.append(modal_text);
    modal_body.append(footer);

    modal.append(modal_body);

    body.append(modal);

    $('.button-close').hover(function(){
        $(this).css('cursor', 'pointer');
    });

}

function copyToClipboard(color) {
    if(color.target.className === 'color-body'){
        let year = color.target.previousSibling.textContent;
        let hexa = color.target.lastChild.value;
        let pantone = color.target.nextSibling.textContent;
        navigator.clipboard.writeText(hexa);
        modalCopied(year, hexa, pantone);
    } else if(color.target.className === 'parrafo_name'){
        let year = color.target.parentElement.parentElement.firstChild.textContent;
        let hexa = color.target.parentElement.lastChild.value;
        let pantone = color.target.parentElement.parentElement.lastChild.textContent;
        navigator.clipboard.writeText(hexa);
        modalCopied(year, hexa, pantone);
    } else if(color.target.className === 'parrafo_hexa'){
        let year = color.target.parentElement.parentElement.firstChild.textContent;
        let hexa = color.target.value;
        let pantone = color.target.parentElement.parentElement.lastChild.textContent;
        navigator.clipboard.writeText(hexa);
        modalCopied(year, hexa, pantone);
    }
}

function closeModal(){
    const modal = document.getElementById('modal_copied');
    modal.remove();
}

document.getElementById('colores').addEventListener('click', copyToClipboard);

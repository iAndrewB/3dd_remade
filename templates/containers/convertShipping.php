<!-- START convertShipping container -->
<h2>Procurar Envio - 
    <select id="shipment_Type">
        <option>Multipeça</option>
        <option>Monopeça</option>
    </select>
</h2>
<form id="convert_Monopiece" style="display: none;">
    <div class="row">
        <div class="col-label">
            <label for="shipment_pieceID">Número de Peça*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_pieceID" placeholder=" Ex: JJD1020202102192192929">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
        </div>
        <div class="col-input">
            <button type='button' class='search_PieceID' style="float: right;">Procurar</button>
        </div>
    </div>
</form>
<form id="convert_Multipiece">
    <div class="row">
        <div class="col-label">
            <label for="shipment_WayBill">Carta de Porte*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_WayBill" placeholder=" Ex: 1212121212">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
        </div>
        <div class="col-input">
            <button type='button' class='search_WayBill' style="float: right;">Procurar</button>
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_PieceIDs">Número de Peça*: </label>
        </div>
        <div class="col-input">
            <table id="shipment_PieceIDs">
                <thead>
                    <tr class="tableColumns">
                        <th>*</th>
                        <th>Piece ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>JJ00084269500035921759</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</form>
<hr>
<form>
    <div class="row">
        <div class="col-title">
            <h2>Dados de Envio</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_dataAddress">Morada*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_dataAddress" placeholder=" ">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_dataZIP">Código Postal*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_dataZIP" placeholder=" ">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_dataTown">Localidade*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_dataTown" placeholder=" ">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_dataPhone">Telemóvel*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_dataPhone" placeholder=" ">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_dataPieces">Número de Peças*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_dataPieces" placeholder=" ">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
            <label for="shipment_dataDuty">DUTY*: </label>
        </div>
        <div class="col-input">
            <input type="text" id="shipment_dataDuty" placeholder=" ">
        </div>
    </div>
    <div class="row">
        <div class="col-label">
        </div>
        <div class="col-input">
            <button type='button' class='convert_Shipment' style="float: right;">Converter & Imprimir</button>
        </div>
    </div>
</form>
<!-- END convertShipping container -->

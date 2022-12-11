import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../styles/Container";
import { BuyerForm } from "../BuyerForm/BuyerForm";
import { Footer } from "../Footer/Footer";
import { Seat } from "../Seat/Seat";
import { StyledSeats } from "./style";

const GET_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/showtimes';
const POST_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many';


export const Seats = ({ setBookedSeatsInfo }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showtimeInfo, setShowtimeInfo] = useState();

    const [bookedSeats, setBookedSeats] = useState({ ids: [], compradores: [] });
    console.log(bookedSeats)

    const isSeatSelected = id => bookedSeats.ids.includes(id);

    const addBuyer = (id, key, value) => {
        const [seatInfo] = bookedSeats.compradores.filter(comprador => comprador.idAssento === id);
        seatInfo[key] = value;
        const newCompradores = bookedSeats.compradores.map(comprador => {
            if (comprador.idAssento === id) return seatInfo;
            return comprador;
        });
        setBookedSeats({ ...bookedSeats, compradores: newCompradores });
    };

    const addSeat = (id, seatNumber) => {
        setBookedSeats({ compradores: [...bookedSeats.compradores, { idAssento: id, nome: '', cpf: '', seatNumber }], ids: [...bookedSeats.ids, id] });
    };

    const removeSeat = (idRemoved) => {
        setBookedSeats({
            ids: bookedSeats.ids.filter(id => id !== idRemoved),
            compradores: bookedSeats.compradores.filter(({ idAssento }) => idAssento !== idRemoved)
        });

    };

    const bookSeats = async (body) => {
        await axios.post(POST_URL, body);
    };

    const handleConfirmButtonClick = async (e) => {
        e.preventDefault();
        if (bookedSeats.ids.length === 0) return;
        const bodyRequestBookedSeatsCompradores = bookedSeats.compradores.map(comprador => ({idAssento: comprador.idAssento, nome: comprador.nome, cpf:comprador.cpf}));
        await bookSeats({ ...bookedSeats, compradores: bodyRequestBookedSeatsCompradores });
        console.log(bookedSeats)
        setBookedSeatsInfo({ bookedSeats, showtimeInfo });
        navigate('/sucesso');
    };

    useEffect(() => {
        axios.get(`${GET_URL}/${id}/seats`)
            .then(res => setShowtimeInfo(res.data));
    }, []);


    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <StyledSeats>
                <div className="seats-list">
                    {showtimeInfo?.seats.map(seat => <Seat isSeatSelected={isSeatSelected} seat={seat} removeSeat={removeSeat} addSeat={addSeat} key={seat.id} />)}
                </div>
                <div className="legends">
                    <div className="legend-container">
                        <div className="legend selected">

                        </div>
                        <p>Selecionado</p>
                    </div>
                    <div className="legend-container">
                        <div className="legend available">

                        </div>
                        <p>Disponível</p>
                    </div>
                    <div className="legend-container">
                        <div className="legend unavailable">

                        </div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <form onSubmit={handleConfirmButtonClick}>
                    {bookedSeats.ids.map((id, index) =>
                        <BuyerForm
                            key={id}
                            id={id}
                            addBuyer={addBuyer}
                            seatInfo={bookedSeats.compradores[index]}
                        />
                    )}
                    <button data-test='book-seat-btn' type='submit'>Reservar assento(s)</button>
                </form>
            </StyledSeats>
            {showtimeInfo && <Footer day={showtimeInfo.day} time={showtimeInfo.name} movieInfo={showtimeInfo.movie} />}
        </Container>
    );
};
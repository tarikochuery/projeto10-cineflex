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

const bookSeats = (body) => {
    axios.post(POST_URL, body);
};

export const Seats = ({ setBookedSeatsInfo }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showtimeInfo, setShowtimeInfo] = useState();

    const [bookedSeats, setBookedSeats] = useState({ ids: [], compradores: [] });

    const isSeatSelected = id => bookedSeats.ids.includes(id)

    const addBuyer = (seatInfo) => {
        //TODO: Adicionar o objeto de comprador do componente BuyerForm ao array compradores no estado boookedSeats
    }

    const addSeat = (id) => {
        setBookedSeats({ ...bookedSeats, ids: [...bookedSeats.ids, id] });
    };

    const removeSeat = (idRemoved) => {
        setBookedSeats({ ...bookedSeats, ids: bookedSeats.ids.filter(id => id !== idRemoved) });
    };

    const handleConfirmButtonClick = () => {
        bookSeats(bookedSeats);
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
                {bookedSeats.ids.map(id => <BuyerForm key={id} id={id} />)}
                <button onClick={() => handleConfirmButtonClick()}>Reservar assento(s)</button>
            </StyledSeats>
            {showtimeInfo && <Footer day={showtimeInfo.day} time={showtimeInfo.name} movieInfo={showtimeInfo.movie} />}
        </Container>
    );
};
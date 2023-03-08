import React from "react"

function Details() {
    return (
        <section class="details">
            <div class="title">Подробности</div>
            <div class="details-blocks list">
                <div class="details-description-block item">
                    <p>
                        <div class="title">День</div>
                        <div class="text">
                            Ожидается облачная погода. Макс. температура: 1°.
                        </div>
                    </p>
                    <p>
                        <div class="title">Ночь</div>
                        <div class="text">
                            Ожидается облачная погода. Мин. температура: -1°.
                        </div>
                    </p>
                </div>
                <div class="details-sunrise-block item">
                    <p>
                        <div class="title">Восход</div>
                        <div class="value">
                            <img src="./icons/sun-up.svg" alt="" class="icon"/>
                            <span class="time">7:21</span>
                        </div>
                    </p>
                    <p>
                        <div class="title">Закат</div>
                        <div class="value">
                            <img src="./icons/sun-down.svg" alt="" class="icon"/>
                            <span class="time">16:22</span>
                        </div>
                    </p>
                </div>
                <div class="details-moon-block item">
                    <p>
                        <div class="title">Восход луны</div>
                        <div class="value">
                            <img src="./icons/moon-up.svg" alt="" class="icon"/>
                            <span class="time">8:16</span>
                        </div>
                    </p>
                    <p>
                        <div class="title">Заход луны</div>
                        <div class="value">
                            <img src="./icons/moon-down.svg" alt="" class="icon"/>
                            <span class="time">16:53</span>
                        </div>
                    </p>
                    <p>
                        <div class="title">Фаза луны</div>
                        <div class="text">Молодая луна</div>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Details;
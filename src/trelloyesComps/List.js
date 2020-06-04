import React from 'react';

function List(props) {
    return (
        <section class="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div class="List-cards">
                <button type="button" class="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}
export default List;
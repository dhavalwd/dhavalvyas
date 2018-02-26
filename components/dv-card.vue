<template>
    <!-- Card -->
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <slot name="card-image"></slot>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4"><slot name="card-title"></slot></p>
                    <p class="subtitle is-6"><slot name="card-subtitle"></slot></p>
                </div>
            </div>

            <div class="content">
                <slot name="card-content"></slot>
            </div>
        </div>
    </div>
</template>


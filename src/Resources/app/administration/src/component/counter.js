import template from './counter.html.twig';

Shopware.Component.register('counter', {
    template,
    props: {
        value: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            currentValue: this.value || 0,
        };
    },
    watch: {
        value() { this.currentValue = this.value; },
    },
    methods: {
        increment() {
            this.currentValue++;
            this.$emit('input', this.currentValue);
        },
        onInput(event) {
            this.currentValue = event.target.value;
            this.$emit('input', this.currentValue);
        },
        onChange(event) {
            this.currentValue = event.target.value;
            this.$emit('input', this.currentValue);
        },
    },
})

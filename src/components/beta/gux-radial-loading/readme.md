# gux-radial-loading

When the loading of a task is known, this component displays a radial indicator and the completed percentage of
the task.

Otherwise, if the loading is unknown, and no percentage is provided, it instead displays a simple Loading Spinner.

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                              | Type                                | Default   |
| --------- | --------- | ---------------------------------------- | ----------------------------------- | --------- |
| `context` | `context` | The display context the component is in. | `"full-page" \| "input" \| "modal"` | `'modal'` |


## Dependencies

### Used by

 - [gux-page-loading-spinner](../../stable/gux-page-loading-spinner)
 - [gux-radial-progress](../../stable/gux-radial-progress)

### Graph
```mermaid
graph TD;
  gux-page-loading-spinner --> gux-radial-loading-beta
  gux-radial-progress --> gux-radial-loading-beta
  style gux-radial-loading-beta fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

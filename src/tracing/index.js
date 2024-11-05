const opentelemetry = require('@opentelemetry/sdk-node')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express')
const { MongoDBInstrumentation } = require('@opentelemetry/instrumentation-mongodb')
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http')
const { Resource } = require('@opentelemetry/resources')
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions')

const setupTracing = (serviceName) => {
    const sdk = new opentelemetry.NodeSDK({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
            environment: process.env.NODE_ENV || 'development'
        }),
        instrumentations: [
            getNodeAutoInstrumentations(),
            new ExpressInstrumentation(),
            new MongoDBInstrumentation(),
            new HttpInstrumentation()
        ]
    })

    sdk.start()
    
    process.on('SIGTERM', () => {
        sdk.shutdown()
            .then(() => console.log('Tracing terminated'))
            .catch((error) => console.log('Error terminating tracing', error))
            .finally(() => process.exit(0))
    })

    return sdk
}

module.exports = setupTracing